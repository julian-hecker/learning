const express = require('express'),
    expressSession = require('express-session'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    passportLocalMongoose = require('passport-local-mongoose'),
    LocalStrategy = require('passport-local'),
    User = require('./models/user.js'),
    app = express();

require('dotenv').config();


// === Connect to Database ===
const DB_URL = process.env.SRV_DB_URL || 'mongodb://localhost:27017/auth';
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// === App Configuration ===
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
    secret: process.env.SESSION_SECRET, // any string of characters; used to encode
    resave: false,
    saveUninitialized: false
}));
app.use(express.static(__dirname + 'public'));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser()); // encode
passport.deserializeUser(User.deserializeUser()); // decode





// === App Routes ===
// Index / Root
app.get('/', (req, res) => {
    res.render('home.ejs');
});

// NEW user form
app.get('/register', (req, res) => {
    res.render('register.ejs');
});

// handle user signups
app.post('/register', (req, res) => {
    const [user, pass] = [req.body.username, req.body.password];
    User.register(new User({
        username: user,
    }), pass, (err, user) => { // don't save password
        if (!err) {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/secret');
            });
        } else {
            console.log(err);
            res.render('/register');
        }
    });
})

// GET Secrets!
app.get('/secret', isLoggedIn, (req, res) => { // using isLoggedIn middleware
    res.render('secret.ejs');
});

// Login form
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

// handle logins
// passport.authenticate middleware does checking
app.post('/login', passport.authenticate('local', {
    successRedirect: '/secret',
    failureRedirect: '/login'
}), (req, res) => { });

// handle logouts
app.get('/logout', (req, res) => {
    req.logout(); // remove session
    res.redirect('/');
});

// Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}


// === Run Server
const PORT = process.env.SRV_PORT || 3000;
const URL = process.env.SRV_URL || 'localhost';
app.listen(PORT, URL, () => {
    console.log(`server started on http://${URL}:${PORT}`)
});

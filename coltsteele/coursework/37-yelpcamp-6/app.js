require('dotenv').config();
// === Packages
const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    // Models
    User = require('./models/user.js'),
    // Other
    app = express();

// === Routes
const indexRoutes = require('./routes/index.js'),
    campgroundRoutes = require('./routes/campgrounds.js'),
    commentRoutes = require('./routes/comments.js');

// === Connect to Database
mongoose.connect(process.env.SRV_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// === App Configuration
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// passport config
app.use(require('express-session')({
    secret: process.env.AUTH_SECRET, // random string used to encode/decode
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// config middlewares
app.use(function (req, res, next) { // runs on all routes
    // middleware: runs before route callback
    res.locals.user = req.user; // accessible everywhere
    next();
});



// === Routes
app.use('/campgrounds', campgroundRoutes); // prefix routes
app.use('/campgrounds/:campId/comments', commentRoutes);
app.use('/', indexRoutes);



// === Run Server
const PORT = process.env.SRV_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

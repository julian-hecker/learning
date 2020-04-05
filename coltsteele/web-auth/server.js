const express = require('express'),
    bcrypt = require('bcryptjs'),
    bodyParser = require('body-parser')
    // csurf = require('csurf'),
    helmet = require('helmet'),
    mongoose = require('mongoose'),
    sessions = require('client-sessions');

const app = express();

mongoose.connect('mongodb://localhost:27017/auth-test', { useNewUrlParser: true, useUnifiedTopology: true });

// === Models ===
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('users', userSchema);


// === App Configuration ===
app.set('view engine', 'pug');


// === Middlewares ===
// bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}));

// // Cross Site Request Forgery Protection
// app.use(csurf()); // use in all routes templates with a form

// HTTP Header Security
app.use(helmet());

// using sessions
app.use(sessions({
    cookieName: 'session',
    secret: 'random secret string of text used to decrypt', // should be in .env
    duration: 30 * 60 * 1000, // 30min
    activeDuration: 5 * 60 * 1000, // lengthens session @5m
    httpOnly: true, // dont let js access cookies
    secure: true, // only over HTTPS
    ephemeral: true, // destroy on close browser !important
}));

// session detection
app.use((req, res, next) => {
    if (!(req.session && req.session.userId)) {
        return next();
    }
    User.findById(req.session.uerId, (err, user) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return next();
        }

        user.password = undefined;
        req.user = user;
        res.locals.user = user;
        next();
    });
});

function loginRequired(req, res, next) {
    if (!req.user) {
        return res.redirect('/login');
    } else {
        next();
    }
}



// === Routes ===
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 14);
    req.body.password = hash;
    const user = new User(req.body);

    user.save((err, item) => {
        if (err) {
            let error = 'Something bad happened! Please try again.\n';
            if (err.code === 11000) {
                error = 'That email is already taken. Please try another.';
            }
            return res.render('register', { error: error });
        }
        res.redirect('/dashboard');
    })
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            res.render('login', { error: err });
        } else if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.render('login', {
                error: 'Incorrect Email / Password!',
            });
        } else {
            req.session.userId = user._id;
            res.redirect('/dashboard');
        }
    });
});

app.get('/dashboard', loginRequired, (req, res, next) => {
    if (!(req.session && req.session.userId)) {
        return res.redirect('/login');
    }

    User.findById(req.session.userId, (err, user) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.redirect('/login');
        }

        res.render('dashboard');
    });
});

// === Start Server ===
app.listen(3000, () => {
    console.log('App started on http://localhost:3000/');
});

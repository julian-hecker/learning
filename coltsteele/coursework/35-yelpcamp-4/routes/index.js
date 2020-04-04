const express   = require('express'),
    router      = express.Router({mergeParams: true}),
    passport    = require('passport'),
    User        = require('../models/user.js')


// Landing Page
router.get('/', (req, res) => {
    res.render('landing', { currentUser: req.user });
});


// === Auth Routes
// display registration form
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', (req, res) => {
    const [user, pass] = [req.body.username, req.body.password];
    User.register(new User({
        username: user
    }), pass, (err, user) => { // no save
        console.log('registering');
        if (!err) {
            passport.authenticate('local')(req, res, () => {
                res.redirect('/campgrounds');
            });
        } else {
            console.log(err);
            res.render('register.ejs');
        }
    });
});

// Login Form
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

// Handle Login
router.post('/login', passport.authenticate('local',
    {   // middleware gets stuff done
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), (req, res) => { }); // callback does nothing


// Handle Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});



// === Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}



module.exports = router;

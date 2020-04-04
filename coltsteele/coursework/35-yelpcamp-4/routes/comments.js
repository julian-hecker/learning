const express = require('express'),
    router = express.Router({mergeParams: true}),
    Campground = require('../models/campground.js');    Comment = require('../models/comment.js'),




// === Comments Routes
    router.get('/new', isLoggedIn, (req, res) => {
    const id = req.params.id;
    Campground.findById(id, (err, camp) => {
        if (!err) {
            res.render('new-comment', { camp: camp });
        } else {
            console.log(err);
            res.redirect(`campgrounds/${id}/comments`);
        }
    });
});

router.post('/', isLoggedIn, (req, res) => {
    const id = req.params.id;
    Campground.findById(id, (err, camp) => {
        if (!err) {
            Comment.create(req.body, (err, comment) => {
                if (!err) {
                    camp.comments.push(comment);
                    camp.save();
                    res.redirect(`/campgrounds/${id}/`)
                } else {
                    console.log(err);
                    res.redirect(`/campgrounds/${id}/`);
                }
            });
        } else {
            console.log(err);
            res.redirect('/campgrounds/');
        }
    });
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

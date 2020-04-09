const express = require('express'),
    router = express.Router({ mergeParams: true }),
    Campground = require('../models/campground.js'),
    Comment = require('../models/comment'),
    middleware = require('../middleware');


// Get INDEX of campgrounds
router.get('/', (req, res) => {
    // Get all campgrounds from db
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index.ejs', { campgrounds: allCampgrounds })
        }
    });
});

// CREATE new item from from
router.post('/', middleware.isLoggedIn, (req, res) => { // same name as get route
    const author = {
        id: req.user._id,
        username: req.user.username
    };
    const newCamp = {
        name: req.body.name,
        image: req.body.image,
        desc: req.body.desc,
        price: req.body.price,
        author: author
    };
    // create new campground, save to db
    Campground.create(newCamp, (err, item) => {
        if (err) {
            console.log(err);
        } else {

            res.redirect('/campgrounds');
        }
    });
});


// Form to add NEW item
router.get('/new', middleware.isLoggedIn, (req, res) => {
    res.render('new.ejs');
});


// SHOWS MORE INFO
router.get('/:campId', (req, res) => {
    // find thing with provided id
    const campId = req.params.campId;
    Campground.findById(campId).populate('comments').exec((err, item) => {
        if (err) {
            console.log(err);
            res.send('Sorry, campground not found!');
        } else {
            // render show page
            res.render('show.ejs', { camp: item });
        }
    });
});


// Edit Campground
router.get('/:campId/edit', middleware.isCampOwner, (req, res) => {
    const campId = req.params.campId;
    Campground.findById(campId, (err, camp) => {
        res.render('edit-campground.ejs', { camp: camp });
    });
});

// Update Campground
router.put('/:campId', middleware.isCampOwner, (req, res) => {
    const campId = req.params.campId;
    const camp = {
        name: req.body.name,
        desc: req.body.desc,
        image: req.body.image,
        price: req.body.price,
    };
    Campground.findByIdAndUpdate(campId, camp, { useFindAndModify: false }, (err, newCamp) => {
        if (!err) {
            res.redirect(`/campgrounds/${campId}`);
        } else {
            res.redirect('/campgrounds');
        }
        console.log(camp.comments);
    });
});

// Destroy Campground
router.delete('/:campId', middleware.isCampOwner, (req, res) => {
    const campId = req.params.campId;
    Campground.findByIdAndDelete(campId, (err, removed) => {
        if (!err) {
            Comment.deleteMany({ _id: { $in: removed.comments } }, (err) => {
                console.log(err);
                res.redirect('/campgrounds');
            });
            res.redirect('/campgrounds');
        } else {
            res.redirect(`/campgrounds/${campId}`);
        }
    });
});


module.exports = router;

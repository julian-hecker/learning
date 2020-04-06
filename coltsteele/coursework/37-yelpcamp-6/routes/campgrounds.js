const express = require('express'),
    router = express.Router({ mergeParams: true }),
    Campground = require('../models/campground.js');


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
router.post('/', isLoggedIn, (req, res) => { // same name as get route
    const author = {
        id: req.user._id,
        username: req.user.username
    };
    const newCamp = {
        name: req.body.name,
        image: req.body.image,
        desc: req.body.desc,
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
router.get('/new', isLoggedIn, (req, res) => {
    res.render('new.ejs');
});


// SHOWS MORE INFO
router.get('/:id', (req, res) => {
    // find thing with provided id
    const id = req.params.id;
    Campground.findById(id).populate('comments').exec((err, item) => {
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
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Campground.findById(id, (err, camp) => {
        if (!err) {
            res.render('edit-campground.ejs', { camp: camp });
        } else {
            console.log(err);
            res.redirect('/campgrounds' + id);
        }
    });
});

// Update Campground
router.put('/:id', (req, res) => {
    const campId = req.params.id;
    const camp = {
        name: req.body.name,
        desc: req.body.desc,
        image: req.body.image
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
router.delete('/:id', (req, res) => {
    const campId = req.params.id;
    Campground.findByIdAndDelete(campId, (err, removed) => {
        if (!err) {
            Comment.deleteMany( { _id: { $in: removed.comments} }, (err) => {
                console.log(err);
                res.redirect('/campgrounds');
            });
            res.redirect('/campgrounds');
        } else {
            res.redirect(`/campgrounds/${campId}`);
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

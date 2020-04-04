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
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.desc;
    const newCamp = { name: name, image: image, desc: desc };
    // create new campground, save to db
    Campground.create(newCamp, (err, item) => {
        if (err) {
            console.log(err);
        } else {
            console.log(item);
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


// === Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}



module.exports = router;

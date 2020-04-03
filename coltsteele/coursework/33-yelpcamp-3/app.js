const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

// const seedDB = require('./seed.js');
// seedDB();

mongoose.connect(process.env.SRV_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Campground = require('./models/campground.js');
const Comment = require('./models/comment.js');

// Campground.create([
//     { name: "tall hill", image: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png' },
//     { name: "small river", image: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png' },
//     { name: "big man", image: 'https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png' }
// ], (err, item) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(item);
//     }
// });


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'public'));

// get landing page
app.get('/', (req, res) => {
    res.render('landing');
});

// Get INDEX of campgrounds
app.get('/campgrounds', (req, res) => {
    // Get all campgrounds from db
    Campground.find({}, (err, allCampgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render('index', { campgrounds: allCampgrounds })
        }
    });
    // res.render('campgrounds', {
    //     campgrounds: campgrounds,
    // });
});

// CREATE new item from from
app.post('/campgrounds', (req, res) => { // same name as get route
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
app.get('/campgrounds/new', (req, res) => {
    res.render('new');
});


// SHOWS MORE INFO
app.get('/campgrounds/:id', (req, res) => {
    // find thing with provided id
    const id = req.params.id;
    Campground.findById(id).populate('comments').exec((err, item) => {
        if (err) {
            console.log(err);
            res.send("Sorry, there's an error!\n" + err);
        } else {
            // render show page
            res.render('show', { camp: item });
        }
    });
});


// Comments Routes
app.get('/campgrounds/:id/comments/new', (req, res) => {
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

app.post('/campgrounds/:id/comments', (req, res) => {
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






const PORT = process.env.SRV_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

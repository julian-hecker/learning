const express = require('express'),
    bodyparser = require('body-parser'),
    sanitizer = require('express-sanitizer');
    methodOverride = require('method-override');
    mongoose = require('mongoose'),
require('dotenv').config();


// === CONFIGURATION ===

// Configure Server
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(sanitizer());
app.use(methodOverride('_method')); // because HTML forms

// Configure Database
const DB_URL = process.env.SRV_DB_URL || 'mongodb://localhost:27017/restblog';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Create schema of items
const blogSchema = mongoose.Schema({
    title: String,
    body: String,
    category: String,
    image: {
        type: String,
        default: 'https://placebear.com/g/1600/900'
    },
    created: {
        type: Date,
        default: Date.now
    }
});

// Create object model
const Blog = mongoose.model('blogs', blogSchema);


// === RESTFUL ROUTES ===

// Redirect to /blogs
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

// Index
app.get('/blogs', (req, res) => {
    // get all items from database
    Blog.find({}, (err, items) => {
        if (err) {
            // handle errors
            console.log('Error!\n' + err);
            res.send('Error!\n' + err);
        } else {
            // render index with items
            res.render('index', { items: items });
        }
    });
});

// New
app.get('/blogs/new', (req, res) => {
    // render creation form
    res.render('new');
});

// Create
app.post('/blogs', (req, res) => {
    // Get data from form submission
    const data = req.body;

    // sanitize inputs
    for (key in data) {
        console.log(key, data[key]);
        data[key] = req.sanitize(data[key]);
        console.log(data[key]);
    }

    // Update database
    Blog.create(data, (err, item) => {
        if (err) {
            console.log('Error!\n' + err);
            res.render('new');
        } else {
            console.log('Added to DB:\n' + item);
            // Redirect to index
            res.redirect('/blogs');
        }
    });
});

// Show
app.get('/blogs/:id', (req, res) => {
    // Get item from db
    const id = req.params.id;
    Blog.findById(id, (err, item) => {
        if (err) {
            console.log('Error!\n' + err);
            res.redirect('/blogs');
        } else {
            // Render template with item
            res.render('show', { blog: item });
        }
    });
});

// Edit
app.get('/blogs/:id/edit', (req, res) => {
    // get specific item
    const id = req.params.id;
    Blog.findById(id, (err, item) => {
        if (err) {
            console.log('Error!\n' + err);
        } else {
            // render editing form
            res.render('edit', { blog: item });
        }
    });
});

// Update
// HTML does not support PUT
// Must use Method Override package
// and append `?_method=PUT` to Action
app.put('/blogs/:id', (req, res) => {
    // update item
    const id = req.params.id;
    const data = req.body;

    // sanitize inputs
    for (key in data) {
        console.log(key, data[key]);
        data[key] = req.sanitize(data[key]);
        console.log(data[key]);
    }

    Blog.findByIdAndUpdate(id, data, (err, item) => {
        if (err) {
            console.log('Error!\n' + err);
            res.redirect('/blogs');
        } else {
            res.redirect(`/blogs/${id}`)
        }
    });
    // redirect
    // res.redirect(`/blogs/${id}`);
});

// Destroy
app.delete('/blogs/:id', (req, res) => {
    // delete item from database
    const id = req.params.id;
    Blog.findByIdAndRemove(id, (err, items) => {
        if (err) {
            console.log('Error!\n' + err);
        } else {
            console.log('Post Deleted!');
            // redirect
            res.redirect('/');
        }
    });
});


const PORT = process.env.SRV_PORT || 3000;
const URL = process.env.SRV_URL || 'localhost';
app.listen(PORT, URL, () => {
    console.log(`Server Started! http://${URL}:${PORT}`);
});

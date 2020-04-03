const mongoose = require('mongoose');

// Connect to Database
mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true, useUnifiedTopology: true });

// Configure Schemas
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] // One User to Many Posts
});

// Then initialize containing model
const User = mongoose.model('users', userSchema);
const newUser = new User({
    name: 'Heck',
    email: 'heck@heck.com',
    posts: [
        {
            title: 'Heck a bit harder',
            content: 'it\'s good exercise'
        }
    ]
});
// Add to contained model
newUser.posts.push({
    title: 'Hecking to the Heck',
    content: 'You should heck as much as you can'
});

// Save instances of models to Database
newUser.save((err, item) => {
    if (err) {
        console.log(err);
    } else {
        console.log(item + 'added to DB');
    }
});



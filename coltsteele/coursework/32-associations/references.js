const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog_demo', { useNewUrlParser: true, useUnifiedTopology: true });

const Post = require('./models/post.js');
const User = require('./models/user.js');

// create a post, 
// find a user, 
// push a post to user, 
// save user to db

Post.create({
    title: 'greetings to the world',
    content: 'awdktawagaawgawgawgwag awfafwaf'
}, (err, post) => {
    if (err) {
        console.log(err);
    } else {
        User.findOne({ email: 'bob@gmail.com' }, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                user.posts.push(post);
                user.save((err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        });
    }
});



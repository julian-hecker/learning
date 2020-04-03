const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            // References an object's ID
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts'
        }
    ]
});

const User = mongoose.model('users', userSchema);

// Export model
module.exports = User;

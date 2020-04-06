const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        username: String
    },
    text: String
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;

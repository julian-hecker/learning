const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
});
const Post = mongoose.model('posts', postSchema);

// Export model
module.exports = Post;

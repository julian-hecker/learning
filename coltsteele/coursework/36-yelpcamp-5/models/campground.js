const mongoose = require('mongoose');

const campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        username: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comments'
        }
    ]
});

const Campground = mongoose.model("campgrounds", campgroundSchema);

module.exports = Campground;
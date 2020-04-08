const express = require('express'),
    router = express.Router({mergeParams: true}),
    Campground = require('../models/campground.js'),
    Comment = require('../models/comment.js'),
    middleware = require('../middleware');




// === Comments Routes
    router.get('/new', middleware.isLoggedIn, (req, res) => {
    const campId = req.params.campId;
    Campground.findById(campId, (err, camp) => {
        if (!err) {
            res.render('new-comment', { camp: camp });
        } else {
            console.log(err);
            res.redirect(`campgrounds/${campId}`);
        }
    });
});

// Create new comment
router.post('/', middleware.isLoggedIn, (req, res) => {
    const campId = req.params.campId;
    const user = req.user.username;
    Campground.findById(campId, (err, camp) => {
        if (!err) {
            Comment.create(req.body, (err, comment) => {
                if (!err) {
                    // associate comment to user
                    comment.author.id = req.user._id;
                    comment.author.username = user;
                    comment.save();
                    camp.comments.push(comment);
                    
                    camp.save();
                    res.redirect(`/campgrounds/${campId}/`)
                } else {
                    console.log(err);
                    res.redirect(`/campgrounds/${campId}/`);
                }
            });
        } else {
            console.log(err);
            res.redirect('/campgrounds/');
        }
    });
});

// Form: Edit comment
router.get('/:commId/edit', middleware.isCommentOwner, (req, res) => {
    const campId = req.params.campId;
    const commentId = req.params.commId;
    Campground.findById(campId, (err, camp) => {
        if (!err) {
            Comment.findById(commentId, (err, comm) => {
                if (!err) {
                    res.render('edit-comment.ejs', {
                        camp: camp,
                        comment: comm
                    });
                } else {
                    console.log(err);
                    res.redirect(`/campgrounds/${campId}`)
                }
            });
        } else {
            console.log(err);
            res.redirect(`/campgrounds/${campId}`)
        }
    });
});

// Update Comment
router.put('/:commId', middleware.isCommentOwner, (req, res) => {
    const campId = req.params.campId;
    const commentId = req.params.commId;
    const newComment = req.body;
    Comment.findByIdAndUpdate(commentId, newComment, { useFindAndModify: false }, (err, comm) => {
        if (!err) {
            res.redirect(`/campgrounds/${campId}`);
        } else {
            console.log(err);
            res.redirect(`/campgrounds/${campId}`);
        }
    });
});

// Delete Comment
router.delete('/:commId', middleware.isCommentOwner, (req, res) => {
    const commentId = req.params.commId;
    Comment.findByIdAndDelete(commentId, (err, removed) => {
        if (!err) {
            res.redirect('back');
        } else {
            console.log(err);
            res.redirect('/campgrounds');
        }
    });
});


module.exports = router;

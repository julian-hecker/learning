// === Dependencies
const Campground = require('../models/campground'),
    Comment = require('../models/comment');

// === Middleware
const middleware = {};

middleware.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}

middleware.isCommentOwner = function(req, res, next) {
    const campId = req.params.campId;
    const commId = req.params.commId;
    if (req.isAuthenticated()) {
        Comment.findById(commId, (err, comment) => {
            if (!err) {
                if (comment.author.id.equals(req.user._id)) {
                    next();
                } else {
                    console.log('unauthorized!');
                    res.redirect('back');
                }
            } else {
                console.log(err);
                res.redirect('back');
            }
        });
    } else {
        console.log('unauthenticated!');
        res.redirect('back');
    }
}

middleware.isCampOwner = function(req, res, next) {
    const campId = req.params.campId;
    if (req.isAuthenticated()) {
        Campground.findById(campId, (err, camp) => {
            if (!err) {
                if (camp.author.id.equals(req.user._id)) {
                    next();
                } else {
                    console.log('unauthorized!');
                    res.redirect('back');
                }
            } else {
                console.log(err);
                res.redirect('/campgrounds');
            }
        });
    } else {
        res.redirect('/login');
    }
}


module.exports = middleware;

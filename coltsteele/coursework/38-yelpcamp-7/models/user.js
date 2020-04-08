const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

userSchema.plugin(plm);

const User = mongoose.model('users', userSchema);

module.exports = User;
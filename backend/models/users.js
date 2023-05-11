const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
        username: String,
        email: String,
        password: String,
        passwordUUID: String
});

module.exports = mongoose.model('users', userSchema);

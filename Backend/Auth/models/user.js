var mongoose        = require('mongoose');
var LocalMongoose   = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(LocalMongoose);

module.exports = mongoose.model('User', UserSchema);
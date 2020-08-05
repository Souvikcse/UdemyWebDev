var mongose = require('mongoose');
var passportMongoose = require('passport-local-mongoose');

var UserSchema = new mongose.Schema({
    username: String,
    password: String
});
UserSchema.plugin(passportMongoose);

module.exports = mongose.model('User', UserSchema);
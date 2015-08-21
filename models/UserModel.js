var mongoose = require('mongoose');
var Logs = require('./timelog.js');

var UserModel = new mongoose.Schema({
    username: { type: String, ref: 'Logs'}
});

module.exports = mongoose.model('UserModel', UserModel);
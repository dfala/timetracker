// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');


// App definition
var app = express();

// Serving app
app.use(express.static(__dirname + '/public'));

//require('./config/passport')(passport); // pass passport for configuration


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


// Connections
var portNum = 3000;

var mongooseUri = 'mongodb://localhost/timetracker';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Storing mongo aliens at:', mongooseUri);
});


app.listen(portNum, function () {
    console.log('Looking for diamonds on port:', portNum);
});
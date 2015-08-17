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
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// Controllers
var timeController = require('./controllers/timeController.js');

// API ENDPOINTS
app.post('/api/start-timer', timeController.startTimer);


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
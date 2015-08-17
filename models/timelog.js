var mongoose = require('mongoose');

var timelog = new mongoose.Schema({
    startDate: { type: Date, required: true, default: new Date() }
  , endDate: Date
  , workType: { type: String, required: true }
});

module.exports = mongoose.model('Timelog', timelog);
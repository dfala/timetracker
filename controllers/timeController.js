var exports = module.exports = {};
var TimeLog = require('../models/timelog.js');

exports.startTimer = function (req, res) {
  console.log(req.body);
  var newTimelog = TimeLog(req.body);
  
  newTimelog.save(function (err, result) {
    console.log(result);
    if (err) return res.status(500).send(err);
    return res.json(result);
  })
}
var exports = module.exports = {};
var TimeLog = require('../models/timelog.js');

exports.startTimer = function (req, res) {
  var newTimelog = TimeLog(req.body);
  
  newTimelog.save(function (err, result) {
    if (err) return res.status(500).send(err);
    return res.json(result);
  })
}


exports.stopTimer = function (req, res) {
  console.log(req.body);

  TimeLog.findById(req.params.logId, function (err, result) {
    if (err) return res.status(500).send(err);

    // result.endDate = result.startDate + req.body.timeEnd;
    result.endDate = new Date(result.startDate.getTime() + (req.body.timeEnd * 1000));

    result.save(function (updateError, udpateResult) {
      if (updateError) return res.status(500).send(err);
      return res.json(updateResult);
    })
  })
}
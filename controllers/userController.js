var exports = module.exports = {};
var User = require('../models/UserModel.js');
var Logs = require('../models/timelog.js')

exports.getUser = function (req, res) {
  var username = req.params.username.toLowerCase();

  User.findOne({ 'username': username }, function (err, result) {
    if (err) res.status(500).send(err);

    if (!err && !result) {
      var newUser = new User();
      newUser.username = username;

      newUser.save(function (err, result) {
        if (err) return res.status(500).send(err);
        return res.json(result);
      });
    } else {
      Logs.find({ 'username': username }, function (err, results) {
        if (err) return res.status(500).send(err.code);
        return res.json(results);
      })
    }

  })
}
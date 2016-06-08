var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {type: String, unique: true, index: true},
  password: {type: String},
  registTime: {type: Number, null: false},
  registIp: {type: String, default: '', index: true},
  lastLoginTime: {type: Number, null: true},
  lastLoginIp: {type: String, default: '', index: true},
  loginTimes: {type: Number, default: 0},
  ban: {type: Boolean, default: false, index: true}
});

module.exports = mongoose.model('User', userSchema);

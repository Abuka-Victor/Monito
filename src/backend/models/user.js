const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);

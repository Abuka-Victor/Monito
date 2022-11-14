const mongoose = require('mongoose');

const boardSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Board', boardSchema);

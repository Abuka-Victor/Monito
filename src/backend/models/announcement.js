const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model('Announcement', announcementSchema);

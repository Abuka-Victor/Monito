const cors = require('cors');
const mongoose = require('mongoose');

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

mongoose.connect(
  process.env.DBSTRING || 'mongodb://localhost:27017/monito-test'
);

module.exports = {
  cors: cors(corsOptions),
  mongoose: mongoose,
};

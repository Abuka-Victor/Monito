const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserRouter = require('./routes/User/User');
const boardRouter = require('./routes/Board/Board');
const annRouter = require('./routes/Announcement/Announcement');
mongoose.connect(
  process.env.DBSTRING || 'mongodb://localhost:27017/monito-test'
);
const app = express();
const PORT = 5500;
app.use('/api/user', UserRouter);
app.use('/api/board', boardRouter);
app.use('/api/announcement', annRouter);

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
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.redirect('/api');
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello World from the backend',
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

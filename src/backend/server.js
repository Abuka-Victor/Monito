const express = require('express');
const cors = require('./config/config');
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

app.use(cors);

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

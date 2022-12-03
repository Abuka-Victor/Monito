const express = require('express');
const config = require('./config/config');
const UserRouter = require('./routes/User/User');
const boardRouter = require('./routes/Board/Board');
const annRouter = require('./routes/Announcement/Announcement');

const app = express();
const PORT = process.env.PORT || 5500;
app.use('/api/user', UserRouter);
app.use('/api/board', boardRouter);
app.use('/api/announcement', annRouter);

app.use(config.cors);

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

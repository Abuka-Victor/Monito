const express = require('express');
const boardRouter = express.Router();
const model = require('../../models/board');
const cors = require('../../config/config');
boardRouter.use(cors);

boardRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the board route',
  });
});

module.exports = boardRouter;

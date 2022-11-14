const express = require('express');
const annRouter = express.Router();
const model = require('../../models/announcement');

annRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the announcement route',
  });
});

module.exports = annRouter;

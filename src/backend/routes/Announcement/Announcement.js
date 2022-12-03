const express = require('express');
const annRouter = express.Router();
const model = require('../../models/announcement');
const config = require('../../config/config');
annRouter.use(config.cors);

annRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the announcement route',
  });
});

module.exports = annRouter;

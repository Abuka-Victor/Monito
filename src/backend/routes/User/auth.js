const express = require('express');
const authRouter = express.Router();

authRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the auth route',
  });
});

module.exports = authRouter;

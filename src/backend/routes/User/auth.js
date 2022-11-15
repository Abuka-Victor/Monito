const express = require('express');
const authRouter = express.Router();
const cors = require('../../config/config');
authRouter.use(cors);

authRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the auth route',
  });
});

module.exports = authRouter;

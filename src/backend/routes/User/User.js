const authRouter = require('./auth');
const express = require('express');
const model = require('../../models/user');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the user route',
  });
});

userRouter.use('/auth', authRouter);

module.exports = userRouter;

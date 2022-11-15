const authRouter = require('./auth');
const express = require('express');
const model = require('../../models/user');
const cors = require('../../config/config');

const userRouter = express.Router();
userRouter.use('/auth', authRouter);
userRouter.use(cors);

userRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the user route',
  });
});

module.exports = userRouter;

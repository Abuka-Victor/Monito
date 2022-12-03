const authRouter = require('./auth');
const express = require('express');
const model = require('../../models/user');
const config = require('../../config/config');
const User = require('../../models/user');

const userRouter = express.Router();
userRouter.use('/auth', authRouter);
userRouter.use(config.cors);

userRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the user route',
  });
});

// Returns name of user
// TODO: Return name of user and boards and tables
userRouter.get('/:id', async (req, res) => {
  try {
    const existing_user = await User.findById(req.params.id);
    res.statusCode = 200;
    return res.json({
      name: existing_user.first_name,
    });
  } catch (e) {
    res.statusCode = 400;
    return res.json({
      message: 'User does not exist',
    });
  }
});

module.exports = userRouter;

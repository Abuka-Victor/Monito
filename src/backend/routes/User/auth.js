const express = require('express');
const authRouter = express.Router();
const config = require('../../config/config');
const mongoose = config.mongoose;
const User = require('../../models/user');
authRouter.use(config.cors);

authRouter.use(express.json());
authRouter.get('/', (req, res) => {
  res.json({
    message: 'You have reached the auth route',
  });
});

authRouter.post('/reg', async (req, res) => {
  body = req.body;
  if (
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.password ||
    !body.confirm_password
  ) {
    res.statusCode = 400;
    return res.json({
      message: 'All fields must be filled',
    });
  }

  if (body.password != body.confirm_password) {
    res.statusCode = 400;
    return res.json({
      message: 'Passwords do not match',
    });
  }

  const existing_user = await User.find({ email: body.email });
  if (existing_user.length != 0) {
    res.statusCode = 400;
    return res.json({
      message: 'This email already exists',
    });
  }

  const new_user = new User(body);
  new_user.save();
  res.statusCode = 200;
  return res.json({ message: 'Successful', id: new_user.id });
});

authRouter.post('/login', async (req, res) => {
  body = req.body;

  if (!body.email || !body.password) {
    res.statusCode = 400;
    return res.json({
      message: 'All fields must be filled',
    });
  }

  const existing_user = await User.find({ email: body.email });
  if (existing_user.length === 0) {
    res.statusCode = 400;
    return res.json({ message: 'User does not exist' });
  }

  const user = existing_user[0];
  if (user.password !== body.password) {
    res.statusCode = 400;
    return res.json({ message: 'Email or username is incorrect' });
  }

  res.statusCode = 200;
  return res.json({ message: 'Successful', id: user.id });
});

module.exports = authRouter;

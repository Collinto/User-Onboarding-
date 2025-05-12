const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const newUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await userService.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: 'Invalid Credentials!' });
    }

    const user = await userService.createUser({ name, email, password });
    res.status(201).json({ message: 'New User Registered Successfully!', user });

  } catch (error) {
    next(error);
  }
};


module.exports = { newUser };

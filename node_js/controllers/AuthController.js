const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Correctly import your sequelize instance
const User = require('../models/users')(sequelize, DataTypes); 

// Signup
module.exports.signup = async (req, res) => {
  const { username, password, email } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, email });
    
    res.status(201).json({ success: true, message: 'User created successfully', data: newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error creating user', error: err.message });
  }
};

// Login
module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  try {
  
    const user = await User.findOne({ where: { username:req.body.username} });
    
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.userId = user.id;  // Store user ID in session
      res.json({ success: true, message: 'Login successful', data: user });
    } else {
      res.status(400).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error logging in', error: err.message });
  }
};

// auth/login.js
const bcrypt = require('bcryptjs');
const { User } = require('../models/users'); // Assuming User model exists
const { generateToken } = require('../utils/jwt'); // Import JWT utility

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  try {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = generateToken(user.id); // Generate JWT token
      res.json({ success: true, message: 'Login successful', token }); // Send token back to client
    } else {
      res.status(400).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error logging in', error: err.message });
  }
};


module.exports.signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword, email });

    res.status(201).json({ success: true, message: 'User created successfully', data: newUser });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error creating user', error: err.message });
  }
}

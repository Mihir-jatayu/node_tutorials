const bcrypt = require('bcryptjs');
 
const sequelize = require('../config/database');
const User = require('../models/users')(sequelize);
// Get list of usersrr
module.exports.getUserList = async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users
    return res.status(200).json(users); // Return users as JSON
  } catch (err) {
    console.error('Error fetching users:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add user method with password hashing
module.exports.addUser = async (req, res) => {
  try {
    const { name, username, email, password, role_id, mobile_no } = req.body;

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 rounds for bcrypt

    // Create a new user record
    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword, // Save the hashed password
      role_id,
      mobile_no
    });

    return res.status(201).json({
      success: true,
      message: 'User added successfully',
      data: newUser
    });
  } catch (err) {
    console.error('Error adding user:', err);
    return res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
  }
};

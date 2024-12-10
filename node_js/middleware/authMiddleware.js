// middleware/authMiddleware.js
const { User } = require('../models/users');  // Import the User model

module.exports.isAuthenticated = async (req, res, next) => {
  // Check if userId is stored in session
  if (req.session.userId) {
    try {
      const user = await User.findByPk(req.session.userId); // Find user by the stored session userId

      if (user) {
        req.user = user;  // Attach the user object to the request for further use
        return next();  // Proceed to the next middleware or route handler
      } else {
        return res.status(401).json({ message: 'Unauthorized: Invalid user' });
      }
    } catch (err) {
      return res.status(500).json({ message: 'Error retrieving user', error: err.message });
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized: No session' });
  }
};

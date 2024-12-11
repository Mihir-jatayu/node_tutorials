const { verifyToken } = require('../utils/jwt');

module.exports.isAuthenticated = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header (Bearer token)
  if (!token) {
    return res.status(403).json({ success: false, message: 'Token is required' });
  }
  const decoded = verifyToken(token); // Verify the token
  if (decoded) {
    req.user = decoded; // Attach the decoded user data to request object
    next(); // Proceed to next middleware or route handler
  } else {
    return res.status(401).json({ success: false, message: 'Invalid or expired token' });
  }
};
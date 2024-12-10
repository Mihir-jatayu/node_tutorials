const express = require('express');
const router = express.Router();
const { getUserList, addUser } = require('../controllers/UserController');
const { isAuthenticated } = require('../middleware/authMiddleware');  // Import the middleware

// Route to get the list of users (protected)
router.get('/getUserList', isAuthenticated, getUserList);

// Route to add a new user (protected)
router.post('/addUser', isAuthenticated, addUser);


module.exports = router;

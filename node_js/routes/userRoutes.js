const express = require('express');
const router = express.Router();
const { getUserList, addUser,getuserProjectModules } = require('../controllers/UserController');
// Import the middleware

// Route to get the list of users (protected)
router.post('/getUserList',getUserList);
router.post('/getuserProjectModules',getuserProjectModules);

// Route to add a new user (protected)
router.post('/addUser',addUser);


module.exports = router;

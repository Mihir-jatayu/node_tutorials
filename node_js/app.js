const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer'); // File handling middleware
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');

const app = express();

// Set up multer for handling form-data (without files)
const upload = multer();

// Ensure correct order of middleware
app.use(cors());
app.use(cookieParser());

// Middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.none())
// Handle form data without files
app.use('/auth',authRoutes);  // Apply multer for auth routes
app.use('/user',userRoutes);  // Apply multer for user routes

// Start the server
app.listen(2409, () => {
  console.log('Server running on port 2409');
});

const express = require('express');
const expressJSON = require('express').json; 
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const multer = require('multer');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const upload = multer().none(); // For multipart form data handling
const sequelize = require('./config/database'); // Sequelize instance


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));  // This parses application/x-www-form-urlencoded data

// Middleware to parse JSON requests (optional if you are also working with JSON data)
app.use(bodyParser.json());  // Parses application/json data

app.use(cors());

// User routes (with authentication protection)
app.use('/user', upload, userRoutes);

// Authentication routes
app.use('/auth', upload, authRoutes);

app.listen(2409, () => {
  console.log('Server running on port 2409');
});

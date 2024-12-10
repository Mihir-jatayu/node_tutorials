const express = require('express');
const cors = require('cors');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const multer = require('multer');
const bodyParser = require('body-parser');
const { sessionConfig } = require('./config/session');
const upload = multer().none();
const app = express();
// Middleware for parsing JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Session middleware
app.use(session(sessionConfig))

app.use('/auth',upload,authRoutes);

// User routes (with authentication protection)
app.use('/user',upload ,userRoutes);

app.listen(2409, () => {
  console.log('Server running on port 2409');
});

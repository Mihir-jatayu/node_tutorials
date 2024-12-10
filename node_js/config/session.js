require('dotenv').config();
module.exports.sessionConfig = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 3600000  // Session expires after 1 hour
    }
  };
require('dotenv').config();
// const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./database'); // Adjust path to your Sequelize instance
const Session = require('../models/session'); // Adjust path to your session model

module.exports.sessionConfig = {
  secret: process.env.SESSION_SECRET || 'your-default-secret', // Ensure you have a secret key
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize, // Reference the sequelize instance
    tableName: 'sessions', // Ensure the table name matches your Sequelize model
  }),
  cookie: {
    maxAge: 60 * 60 * 1000, // 1 hour
    secure: false,  // Set to `true` in production with HTTPS
    httpOnly: true, // Prevents access to cookie from JavaScript (XSS protection)
  },
};

// Synchronize the session table with Sequelize (in development)
Session.sync({ alter: true }) 
  .then(() => {
    console.log('Session table synced!');
  })
  .catch((error) => {
    console.error('Error syncing session table:', error);
  });

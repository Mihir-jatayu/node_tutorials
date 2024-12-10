const { Sequelize } = require('sequelize');

// You can change these to environment variables
const sequelize = new Sequelize('rahi_logistics', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize
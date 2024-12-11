const Sequelize = require('sequelize');// Adjust the path to your sequelize instance

const Session = Sequelize.define('sessions', {
  sid: {
    type: DataTypes.STRING(255),
    allowNull: false,
    primaryKey: true, // Primary key
  },
  user_id: {
    type: DataTypes.BIGINT(20).UNSIGNED,
    allowNull: true,
  },
  ip_address: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  user_agent: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  payload: {
    type: DataTypes.LONGTEXT,
    allowNull: false,
  },
  last_activity: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true,
    onUpdate: DataTypes.NOW, // Automatically update on change
  }
}, {
  tableName: 'sessions', // Define table name
  timestamps: true, // Enable automatic timestamps
  updatedAt: 'updatedAt', // Explicitly set updatedAt column name
  createdAt: 'createdAt', // Explicitly set createdAt column name
  indexes: [
    { fields: ['user_id'] }, // Index for user_id for faster lookups
    { fields: ['last_activity'] }, // Index for last_activity for session expiry checks
  ],
});

module.exports = Session;

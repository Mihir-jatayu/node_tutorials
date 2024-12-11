const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs'); // Import bcryptjs for hashing passwords

module.exports = function(sequelize) {
  const User = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    api_token: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    mobile_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mobile_verification_otp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_mobile_verified: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    profile_pic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_authorised: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    is_repair_authorised: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',  // Custom name for createdAt column
    updatedAt: 'updated_at',  // Custom name for updatedAt column
    deletedAt: 'deleted_at',  // Custom name for updatedAt column
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ],

    // Hooks for password hashing before saving to the database
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);  // Hash password before storing
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          user.password = await bcrypt.hash(user.password, 10);  // Hash password before updating
        }
      }
    }
  });

  // Method to compare password during login
  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);  // Compare hashed password with input
  };

  return User;
};

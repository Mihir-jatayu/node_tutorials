const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('drivers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    app_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    home_contact: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    driver_status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    local_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    permanent_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    add3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adani_getpass: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    experience: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    driver_dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    blood_group: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qualification: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Salary: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    total_credit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'drivers',
    timestamps: true,
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
    ]
  });
};

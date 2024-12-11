const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('party', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gst_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pan_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address_line_1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_line_2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    state_code: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pincode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ledger_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    gps_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tds_per: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ifsc_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    beneficiary_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branch_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'party',
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

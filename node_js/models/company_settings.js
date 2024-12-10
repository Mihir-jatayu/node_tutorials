const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('company_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobileno: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    pan_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    gst_no: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    bank_account_holder_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ifsc_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    term_1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    term_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    term_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    term_4: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    term_5: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cin_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    msme_no: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stamp_img: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    stamp_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'company_settings',
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

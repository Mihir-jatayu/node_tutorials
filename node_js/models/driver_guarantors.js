const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('driver_guarantors', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    guarentor1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    guarentor1_phone_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    guarentor1_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    guarentor2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    guarentor2_phone_no: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    guarentor2_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'driver_guarantors',
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

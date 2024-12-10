const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tyre_service_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tyre_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tyre_service_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    service_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    service_amount: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tyre_service_log',
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

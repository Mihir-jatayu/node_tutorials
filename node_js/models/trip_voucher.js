const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trip_voucher', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    trip_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    branch: {
      type: DataTypes.ENUM('Mundra','Gandhidham'),
      allowNull: false,
      defaultValue: "Mundra"
    },
    voucher_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    voucher_entry_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    voucher_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_mode: {
      type: DataTypes.ENUM('Cash','Bank'),
      allowNull: false,
      defaultValue: "Cash"
    },
    fuel_station_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuel_qty: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    fuel_rate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    invoice_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_party_advance: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    voucher_created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trip_voucher',
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

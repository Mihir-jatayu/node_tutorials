const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transport_trips', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_trip: {
      type: DataTypes.ENUM('New','Old'),
      allowNull: false,
      defaultValue: "New"
    },
    trip_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entry_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lr_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    lr_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    consignee_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    consignor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    do_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    po_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    route_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transporter_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_market_lr: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    market_freight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    gross_weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tare_weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    net_weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    unload_weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    short_weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    damage_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    shortage_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    tds_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    freight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    is_loading: {
      type: DataTypes.ENUM('Pending','Done'),
      allowNull: false,
      defaultValue: "Pending"
    },
    lr_status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
      comment: "1= running,0=cencel"
    },
    bill_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transporter_bill_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    transporter_bill_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    transporter_bill_doc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    trip_created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lr_scan: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transport_trips',
    hasTrigger: true,
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

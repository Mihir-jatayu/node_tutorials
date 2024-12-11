const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    registration_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vehicle_alias: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    registration_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    rto_auth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    chassis_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    engine_no: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    manufacture_year: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    manufacture_month: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    purchase_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    purchase_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sale_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sale_amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    gvw_in_kg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ulw_in_kg: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vehicle_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stephanie: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('owner','market','group'),
      allowNull: false,
      defaultValue: "owner"
    },
    fuel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    f_t_type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    f_total_tyre: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    b_t_type: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    b_total_tyre: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    tyre_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    f_size: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    b_size: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    equipment_vehicle: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false
    },
    vehicle_status: {
      type: DataTypes.ENUM('Available','CFS','Repair','On Job','Unloading','Hold'),
      allowNull: false,
      defaultValue: "Available"
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'vehicles',
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

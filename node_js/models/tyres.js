const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tyres', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tyre_brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mode: {
      type: DataTypes.ENUM('Vehicle','InStock'),
      allowNull: true,
      defaultValue: "InStock"
    },
    serial_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    size: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tread_pattern: {
      type: DataTypes.ENUM('Directional','Symmetrical','Asymmetrical','Directional/Asymmetrical'),
      allowNull: true,
      defaultValue: "Directional"
    },
    tread_depth: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pressure: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    max_running_limit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tyre_condition: {
      type: DataTypes.ENUM('New','Retread','Regroove'),
      allowNull: true,
      defaultValue: "New"
    },
    odo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    manufacturer_dt: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tyres',
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicle_repairs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    complain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estimeted_time: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    followup_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vehicle_repairs',
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

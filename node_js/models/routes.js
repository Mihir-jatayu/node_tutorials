const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('routes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_place: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    destination_1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    destination_2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    destination_3: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hrs: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    km: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'routes',
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

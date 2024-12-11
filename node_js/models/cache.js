const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cache', {
    key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expiration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cache',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "key" },
        ]
      },
    ]
  });
};

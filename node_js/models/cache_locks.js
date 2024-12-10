const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cache_locks', {
    key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    expiration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cache_locks',
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

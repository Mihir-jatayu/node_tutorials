const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('personal_access_tokens', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    abilities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expires_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tokenable_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tokenable_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_used_at: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'personal_access_tokens',
    timestamps: true,
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction_head', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Income','Expense'),
      allowNull: false,
      defaultValue: "Income"
    },
    transaction_type: {
      type: DataTypes.ENUM('Cash','Bank'),
      allowNull: false,
      defaultValue: "Cash"
    }
  }, {
    sequelize,
    tableName: 'transaction_head',
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

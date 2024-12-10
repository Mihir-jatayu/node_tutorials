const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account_book', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    voucher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    entry_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.ENUM('Cash','Bank'),
      allowNull: false,
      defaultValue: "Cash"
    },
    account_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Income','Expense'),
      allowNull: false,
      defaultValue: "Income",
      comment: "particular"
    },
    head_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    branch: {
      type: DataTypes.ENUM('Jodhpur','Rajsamand'),
      allowNull: false,
      defaultValue: "Jodhpur"
    },
    narration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'account_book',
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

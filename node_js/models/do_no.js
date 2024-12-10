const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('do_no', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    total_lifted_weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    net_balance_qty: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    party_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'do_no',
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

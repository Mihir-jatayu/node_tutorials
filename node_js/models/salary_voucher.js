const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('salary_voucher', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    salary_voucher_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salary_voucher_from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    salary_voucher_to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    branch: {
      type: DataTypes.ENUM('Mundra','Gandhidham'),
      allowNull: false,
      defaultValue: "Mundra"
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    driver_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salary_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    deduct_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payable_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    payment_type: {
      type: DataTypes.ENUM('Cash','Card','Bank'),
      allowNull: false,
      defaultValue: "Cash"
    },
    salary_voucher_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    voucher_type: {
      type: DataTypes.ENUM('SalaryVoucher','AdvanceVoucher'),
      allowNull: false,
      defaultValue: "SalaryVoucher"
    }
  }, {
    sequelize,
    tableName: 'salary_voucher',
    hasTrigger: true,
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project_modules', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('Web','App'),
      allowNull: false,
      defaultValue: "Web"
    }
  }, {
    sequelize,
    tableName: 'project_modules',
    timestamps: true,
    createdAt: 'created_at',  // Custom name for createdAt column
    updatedAt: 'updated_at',  // Custom name for updatedAt column
    deletedAt: 'deleted_at',  // Custom name for updatedAt column
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_batches', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    total_jobs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pending_jobs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    failed_jobs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    failed_job_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cancelled_at: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    finished_at: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'job_batches',
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

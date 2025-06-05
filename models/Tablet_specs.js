const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Tablet_specs = sequelize.define('Tablet_specs', {
    tabletModel: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    cams: {
      type: DataTypes.STRING
    },
    display: {
      type: DataTypes.STRING
    },
    chipset: {
      type: DataTypes.STRING
    },
    battery: {
      type: DataTypes.STRING
    },
    storage: {
      type: DataTypes.INTEGER
    },
    ram: {
      type: DataTypes.INTEGER
    },
    dimensions: {
      type: DataTypes.STRING
    },
    calification: {
      type: DataTypes.FLOAT
    },
    OS: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'tablet_specs',
    timestamps: false
  });

  Tablet_specs.associate = (models) => {
    Tablet_specs.belongsTo(models.Tablet, {
      foreignKey: 'tabletModel',
      as: 'tablet',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Tablet_specs;
};

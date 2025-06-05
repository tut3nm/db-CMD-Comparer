const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Tablet = sequelize.define('Tablet', {
    model: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'tablet',
    timestamps: false
  });

  Tablet.associate = (models) => {
    Tablet.hasOne(models.Tablet_specs, {
      foreignKey: 'tabletModel',
      as: 'specs',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Tablet;
};

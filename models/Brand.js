module.exports = (sequelize, DataTypes) => {
  return sequelize.define('brand', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    devices: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
};

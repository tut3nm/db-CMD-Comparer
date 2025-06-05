module.exports = (sequelize, DataTypes) => {
  return sequelize.define('brand', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    devices: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
};

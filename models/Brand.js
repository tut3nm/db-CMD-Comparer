module.exports = (sequelize, DataTypes) => {
  console.log("Se ejecuta")
  return sequelize.define('brand', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    devices: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
};
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('watch', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    model: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(45)
    },
    age: {
      type: DataTypes.INTEGER
    },
    release_date: {
      type: DataTypes.DATEONLY
    }
  });
};
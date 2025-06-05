module.exports = (sequelize, DataTypes) => {
  return sequelize.define('watch', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER
    },
    release_date: {
      type: DataTypes.DATEONLY,
    }
  });
};
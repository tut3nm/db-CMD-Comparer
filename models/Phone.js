module.exports = (sequelize, DataTypes) => {
  return sequelize.define('phone', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATEONLY,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
  });
};
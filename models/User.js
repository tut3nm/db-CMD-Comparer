module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,

    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    userpass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    birthday: {
      type: DataTypes.DATEONLY
    },
    permissions: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
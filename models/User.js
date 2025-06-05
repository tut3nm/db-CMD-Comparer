module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    userpass: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
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
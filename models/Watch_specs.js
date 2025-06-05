module.exports = (sequelize, DataTypes) => {
  return sequelize.define('watch_specs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    chipset: {
      type: DataTypes.TEXT
    },
    display_tec: {
      type: DataTypes.STRING(10)
    },
    display_ppp: {
      type: DataTypes.INTEGER
    },
    display_inch: {
      type: DataTypes.FLOAT
    },
    batery: {
      type: DataTypes.INTEGER
    },
    os: {
      type: DataTypes.STRING(20)
    },
    ram: {
      type: DataTypes.INTEGER
    },
    storage: {
      type: DataTypes.INTEGER
    },
    dimensions: {
      type: DataTypes.STRING(45)
    },
    weight: {
      type: DataTypes.INTEGER
    },
    has_sim: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    calification: {
      type: DataTypes.FLOAT
    },
    cal_pri_qua: {
      type: DataTypes.FLOAT
    }
  });
};
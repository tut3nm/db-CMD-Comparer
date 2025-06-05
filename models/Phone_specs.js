module.exports = (sequelize, DataTypes) => {
  return sequelize.define('phone_specs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    cam_1: {
      type: DataTypes.TEXT
    },
    cam_2: {
      type: DataTypes.TEXT
    },
    cam_3: {
      type: DataTypes.TEXT
    },
    cam_4: {
      type: DataTypes.TEXT
    },
    cam_front: {
      type: DataTypes.TEXT
    },
    chipset: {
      type: DataTypes.TEXT
    },
    display_tec: {
      type: DataTypes.STRING
    },
    display_ppp: {
      type: DataTypes.INTEGER
    },
    display_inch: {
      type: DataTypes.FLOAT
    },
    display_freq: {
      type: DataTypes.INTEGER
    },
    batery: {
      type: DataTypes.INTEGER
    },
    charge: {
      type: DataTypes.INTEGER
    },
    os: {
      type: DataTypes.STRING
    },
    ram: {
      type: DataTypes.INTEGER
    },
    storage: {
      type: DataTypes.INTEGER
    },
    dimensions: {
      type: DataTypes.STRING
    },
    weight: {
      type: DataTypes.INTEGER
    },
    video_specs: {
      type: DataTypes.TEXT
    },
    has_5g: {
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
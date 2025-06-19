const { User } = require('../models');
const { sequelize } = require('../db-config');


exports.getToken = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userid);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    
    const token = `token-falso-para-${user.username}`;
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateAccess = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    await user.update({ access: req.body.access });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    await user.destroy();
    res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
    const { username, userpass, email, birthday, permissions } = req.body;
    const user = await sequelize.models.user.create(req.body);
  };

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
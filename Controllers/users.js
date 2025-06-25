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
  try {
    const { username, userpass, email, birthday, permissions } = req.body;
    if (!username || !userpass || !email || !birthday) {
      return res.status(400).json({ message: 'Faltan campos obligatorios: username, userpass, email o birthday' });
    }
    const existing = await User.findOne({ where: { username } });
    if (existing) {
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }
    const user = await User.create({ username, userpass, email, birthday, permissions });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
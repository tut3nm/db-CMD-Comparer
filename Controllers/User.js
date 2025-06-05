const { User } = require('User/models');


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
    res.status(500).json({ error: error.message });
  }
};

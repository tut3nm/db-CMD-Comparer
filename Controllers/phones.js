const { Phone, PhoneSpecs } = require('../models');

exports.getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.findAll({
      include: { model: PhoneSpecs, as: 'specs' }
    });
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPhoneById = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id, {
      include: { model: PhoneSpecs, as: 'specs' }
    });

    if (!phone) {
      return res.status(404).json({ message: 'Teléfono no encontrado' });
    }

    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createPhone = async (req, res) => {
  try {
    const { model, code, price, release_date, age, specs } = req.body;

    const phone = await Phone.create({ model, code, price, release_date, age });
    const phoneSpecs = await PhoneSpecs.create({ ...specs, phone_id: phone.id });

    res.status(201).json({ phone, phoneSpecs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePhone = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id);

    if (!phone) return res.status(404).json({ message: 'Teléfono no encontrado' });

    await phone.update(req.body);
    res.json(phone);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePhone = async (req, res) => {
  try {
    const phone = await Phone.findByPk(req.params.id);

    if (!phone) return res.status(404).json({ message: 'Teléfono no encontrado' });

    await phone.destroy();
    res.json({ message: 'Teléfono eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

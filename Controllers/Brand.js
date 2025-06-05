const { Brand, Phone, Watch} = require('Brand/models');


exports.getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findByPk(req.params.id);
    if (!brand) return res.status(404).json({ message: 'Marca no encontrada' });
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getPhonesByBrand = async (req, res) => {
  try {
    const phones = await Phone.findAll({ where: { BrandId: req.params.id } });
    res.json(phones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getWatchesByBrand = async (req, res) => {
  try {
    const watches = await Watch.findAll({ where: { BrandId: req.params.id } });
    res.json(watches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const express = require('express');
const router = express.Router();
const {
  getBrandById,
  getPhonesByBrand,
  getWatchesByBrand
} = require('../Controllers/brands');

router.get('/:id', getBrandById);

router.get('/:id/phones', getPhonesByBrand);

router.get('/:id/watches', getWatchesByBrand);

module.exports = router;
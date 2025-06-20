const express = require('express');
const router = express.Router();
const {
  getPhoneSpecs,
  createPhoneSpecs,
  updatePhoneSpecs,
  deletePhoneSpecs
} = require('../Controllers/phoneSpecs');

router.get('/:phoneId', getPhoneSpecs);
router.post('/:phoneId', createPhoneSpecs);
router.put('/:phoneId', updatePhoneSpecs);
router.delete('/:phoneId', deletePhoneSpecs);

module.exports = router;
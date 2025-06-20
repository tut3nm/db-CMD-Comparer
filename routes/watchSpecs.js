const express = require('express');
const router = express.Router();
const {
  getWatchSpecs,
  createWatchSpecs,
  updateWatchSpecs,
  deleteWatchSpecs
} = require('../Controllers/watchSpecs');

router.get('/:watchId', getWatchSpecs);
router.post('/:watchId', createWatchSpecs);
router.put('/:watchId', updateWatchSpecs);
router.delete('/:watchId', deleteWatchSpecs);

module.exports = router;
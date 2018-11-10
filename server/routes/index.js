const express = require('express');

const router = express.Router();
const linkedinRoute = require('./api/linkedin');
const databaseRoute = require('./api/database');

router.use('/api', linkedinRoute);
router.use('/api/database', databaseRoute);

module.exports = router;

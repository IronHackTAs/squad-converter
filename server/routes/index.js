
const express = require('express');
const linkedinRoute = require('./api/linkedin');
const databaseRoute = require('./api/database');

const router = express.Router();

router.use('/api', linkedinRoute);
router.use('/api/database', databaseRoute);

module.exports = router;

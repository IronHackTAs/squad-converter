const express = require('express');

const router = express.Router();


/* GET home page */
router.get('/', (req, res) => {
  res.render('index');
});

const linkedinRoute = require('./api/linkedin');

router.use('/api', linkedinRoute);

const databaseRoute = require('./api/database');

router.use('/database', databaseRoute);

module.exports = router;

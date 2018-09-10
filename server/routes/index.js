const express = require('express');
const router  = express.Router();


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

const linkedinRoute = require('./api/linkedin');
router.use('/api', linkedinRoute);

module.exports = router;

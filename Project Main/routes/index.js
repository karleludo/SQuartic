const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // response.render('index');  changed to landing.ejs from matt
  res.render('landing');
});

router.get('/page1', (req, res) => {
  res.render('page1');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const user = require('./createUser');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'StoriesLab.io' });
});

user;

module.exports = router;

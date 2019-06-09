const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check');
const user_controller = require('../controllers/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'StoriesLab.io' });
});

/* GET user page */
router.get('/users', (req, res, next) => {
  res.render('users', {title: 'users page'})
});

/** check validity of user info, then pass to controller */
router.post('/users', [
  check('username').isAlphanumeric(),
  check('password').isLength({min: 6})],
user_controller.userLogin);

module.exports = router;

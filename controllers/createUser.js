const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

router.get('/users', (req, res, next) => {
  res.render('users', {title: 'users page'})
});


router.post('/users', [
  check('username').isAlphanumeric(),
  check('password').isLength({min: 6})
], (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(442).json({ errors: errors.array() });
  } else {
    const user = {
      username: req.body.username,
      password: req.body.password,
    }
    formController.logRes(user);
    res.redirect('/users');
    res.end();
  }
})

module.exports = user;
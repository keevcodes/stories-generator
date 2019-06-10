const express = require('express');
const usersRouter = express.Router();

const { check } = require('express-validator/check');
const user_controller = require('../controllers/user');

/** GET user page */
usersRouter.get('/users', (req, res, next) => {
  res.render('users', {title: 'users page'})
});

/** check validity of user info, then pass to controller */
usersRouter.post('/users', [
  check('username').isAlphanumeric(),
  check('password').isLength({min: 6})],
user_controller.userLogin);

module.exports = usersRouter;

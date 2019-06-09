const { validationResult } = require('express-validator/check');

exports.userLogin = ((req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(442).json({ errors: errors.array() });
  } else {
    const user = {
      username: req.body.username,
      password: req.body.password,
    }
    res.redirect('/');
    res.end();
  }
})
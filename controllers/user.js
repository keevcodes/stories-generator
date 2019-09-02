const { validationResult } = require('express-validator');

exports.userLogin = ((req, res) => {

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
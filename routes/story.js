const express = require('express');
const storyRouter = express.Router();

/** GET story page */
storyRouter.get('/story', (req, res) => {
  res.render('amp-story', {})
});

module.exports = storyRouter;

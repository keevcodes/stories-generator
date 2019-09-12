const express = require('express');
const indexRouter = express.Router();
const drag_controller = require('../controllers/drag');

/** GET home page. */
indexRouter.get('/', (req, res, next) => {
  res.render('index.pug', { title: 'StoriesLab.io' });
});

indexRouter.post('/', drag_controller.drag);


module.exports = indexRouter;

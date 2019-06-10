const express = require('express');
const router = express.Router();
const download_controller = require('../controllers/download');

/** GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'StoriesLab.io' });
});

/** handle sending final AMP story file to frontend  */
router.post('/', download_controller.download);

module.exports = router;

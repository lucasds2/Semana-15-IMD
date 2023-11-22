
let express = require('express');
let router = express.Router();
let { requireAuth } = require('../middleware/authMiddleware');

router.get('/dashboard', requireAuth, function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;

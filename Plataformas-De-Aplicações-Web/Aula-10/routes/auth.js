
let express = require('express');
let router = express.Router();
let { requireAuth } = require('../middleware/authMiddleware');

const users = [
  { id: 1, email: 'usuario1@example.com', password: 'senha123' },
  { id: 2, email: 'usuario2@example.com', password: 'senha456' }
];

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    req.session.userId = user.id;
    res.redirect('/');
  } else {
    res.redirect('/auth/login');
  }
});

router.get('/logout', function(req, res, next) {
  req.session = null;
  res.redirect('/');
});

module.exports = router;

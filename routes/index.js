var express = require('express');
var router = express.Router();

// GET home page
router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});

// GET about page
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

// GET contact page
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

// POST thanks page
router.post('/thanks', function(req, res) {
  res.render('thanks', { title: 'Thanks', name: req.body.name });
});

module.exports = router;

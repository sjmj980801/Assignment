var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About'});
});

/*Get products page */
router.get('/products', function(req, res, next) {
  res.render('index', { title: 'Products'});
});

/*Get services page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/*get contact us page */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});


module.exports = router;

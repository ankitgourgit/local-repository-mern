var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'Express' });
});

router.get('/feature', function(req, res, next) {
  res.render('feature', { title: 'Express' });
});

router.get('/price', function(req, res, next) {
  res.render('price', { title: 'Express' });
});

router.get('/quote', function(req, res, next) {
  res.render('quote', { title: 'Express' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Express' });
});

router.get('/testimonial', function(req, res, next) {
  res.render('testimonial', { title: 'Express' });
});

router.get('/pages', function(req, res, next) {
  res.render('pages', { title: 'Express' });
});


module.exports = router;

var express = require('express');
var router = express.Router();
var indexmodel=require('../models/indexmodel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('aindex');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});
router.login('/login', function(req, res, next) {
  res.render('login');
});

module.exports = router;

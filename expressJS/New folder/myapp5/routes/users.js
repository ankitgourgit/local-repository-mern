var express = require('express');
var router = express.Router();
var indexmodel=require('../models/indexmodel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});


module.exports = router;

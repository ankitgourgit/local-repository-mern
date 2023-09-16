var express = require('express');
var adminrouter = express.Router();

/* GET users listing. */
adminrouter.get('/', function(req, res,next) {
  res.render('adminhome');
});

adminrouter.get('/about', function(req, res,next) {
  res.render('adminabout');
});

adminrouter.get('/pwdchange', function(req, res,next) {
  res.render('pwdchange');
});

adminrouter.get('/userlist', function(req, res,next) {
  res.render('userlist');
});

adminrouter.get('/registration', function(req, res,next) {
  res.render('adminregistration');
});

module.exports = adminrouter;

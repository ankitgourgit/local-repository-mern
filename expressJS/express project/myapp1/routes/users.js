var express = require('express');
var usersrouter = express.Router();

/* GET users listing. */
usersrouter.get('/', function(req, res,next) {
  res.render('userhome');
});

usersrouter.get('/about', function(req, res,next) {
  res.render('userabout');
});

usersrouter.get('/depart', function(req, res,next) {
  res.render('userdepart');
});

usersrouter.get('/doc', function(req, res,next) {
  res.render('userdoc');
});

usersrouter.get('/reg', function(req, res,next) {
  res.render('userreg');
});

module.exports = usersrouter;

var express = require('express');
var router = express.Router();
var indexmodel=require('../models/indexmodel')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req, res, next) {
  res.render('login', { msg: 'welcome' });
});
router.post('/login', function(req, res, next) {
  console.log(req.body)
  indexmodel.loginCheck(req.body,(result)=>{
    if(result.length>0)
    {
      res.redirect('/admin')
    }else{
      res.render('login', { title: 'data not sotred' })
    }
  });
});

module.exports = router;

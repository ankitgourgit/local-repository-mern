var express = require('express');
const indexmodel = require('../models/indexmodel');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next){
  indexmodel.loginCheck(req.body,(result)=>{
    if(result.length>0)
    {
      res.redirect('/admin')
    }else{
      res.render('login')
    }
  })
})
module.exports = router;

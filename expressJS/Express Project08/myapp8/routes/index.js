var express = require('express');
var router = express.Router();
var indexmodel=require('../models/indexmodel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/registration', function(req, res, next) {
  res.render('registration');
});
router.post('/registration',function(req,res,next){
  //console.log(req.body)
  indexmodel.registration(req.body,(result)=>{
    res.render('registration')
  })
})

router.get('/regUpdate', function(req, res, next) {
  res.render('regUpdate', { title: 'Express' });
});

router.post('/regUpdate', function(req, res, next){
  indexmodel.userUpdate(req.body,(result)=>{
    res.render('regUpdate')
  })

})

router.get('/showdata', function(req, res,next) {
  res.render('showdata',{msg:'express'});
});

router.post('/showdata', function(req, res,next) {
  indexmodel.showData(req.body,(result)=>{
    if(result.length>0)
    {
     res.render('showusers',{'userDetails':result})
   }else{
 
   res.render('showdata',{msg:'Data not found'});
  }
 })
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res,next) {
  //console.log(req.body);
  indexmodel.loginCheck(req.body,(result)=>{
  if(result.length>0)
  res.render('index',{msg:'welcome'});
  else
  res.render('login',{msg:'login again'});
 })
});
module.exports = router;

var express = require('express');
var indexrouter = express.Router();
var indexmodel=require('../models/indexmodel')

/* GET  pages. */
indexrouter.get('/', function(req, res,next) {
  res.render('index');
});

indexrouter.get('/about', function(req, res,next) {
  res.render('about');
});

indexrouter.get('/showdata', function(req, res,next) {
  res.render('showdata',{msg:'express'});
});


 indexrouter.post('/showdata', function(req, res,next) {
   indexmodel.showData(req.body,(result)=>{
     if(result.length>0)
     {
      res.render('showusers',{'userDetails':result})
    }else{
  
    res.render('showdata',{msg:'Data not found'});
   }
  })
 });

indexrouter.get('/doc', function(req, res,next) {
  res.render('doc');
});

indexrouter.get('/reg', function(req, res,next) {
  res.render('reg');
});

indexrouter.post('/reg', function(req, res,next) {
     indexmodel.registration(req.body,(result)=>{
      res.render('reg',{msg:'Data store properly'})
     })
});


indexrouter.get('/login', function(req, res,next) {
  res.render('login',{title: 'Express' });
});

indexrouter.post('/login', function(req, res,next) {
  //console.log(req.body);
  indexmodel.loginCheck(req.body,(result)=>{
  if(result.length>0)
  res.render('index',{msg:'welcome'});
  else
  res.render('login',{msg:'login again'});
 })
});


indexrouter.get('/regUpdate', function(req, res,next) {
  res.render('regUpdate',{msg: 'Express' });
});

indexrouter.post('/regUpdate', function(req, res,next){
  indexmodel.userUpdate(req.body,(result)=>{
    res.render('regUpdate',{msg:'Data Update Properly'}) 
  })
})

indexrouter.get('/contact', function(req, res,next) {
  res.render('contact');
});


module.exports = indexrouter;
  
s
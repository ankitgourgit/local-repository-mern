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
      // to store user details in session
      req.session.Username=result[0].Username
      req.session.role=result[0].role
  
    }
    if(result.length>0)
    {
      if(result[0].role=='admin')
      res.redirect("/admin")
      else
      if(result[0].role=='user')
      res.redirect("/users")
    }else{
      res.render('login',{title:'Express'})
    }

   }
  )
})
// For authentication and back button destory and manage users code is
router.use('/login',(req,res,next)=>{
  if(req.session.Username!=undefined)
  req.session.destroy()
  next()
})
module.exports = router;

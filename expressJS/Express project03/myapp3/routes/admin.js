var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('adminindex');
});




// router.get('/manageuser', function(req, res, next) {
//   adminmodel.fatchusers(req.body,(result)=>{
//       res.render('manageuser', { 'userDetails': result,'Username':req.session.Username});
//   })
// });

// router.get('/manageuserstatus', function(req, res, next) {
//   var p=url.parse(req.url,true).query
//   adminmodel.manageuserstatus(p,(result)=>{
//       console.log(result)
//       res.redirect("/admin/manageuser")
//   })
// });



//Middleware Function to authenticate admins 
router.use((req,res,next)=>{
  if(req.session.Username!=undefined && req.session.role=='admin')
  next()
  else
  res.redirect('/login')
})
module.exports=router; 
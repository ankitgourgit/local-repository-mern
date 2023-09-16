const express=require('express');
const userrouter=express.Router();

userrouter.get('/',(req,res)=>{
    res.render('login')
});


module.exports=userrouter;
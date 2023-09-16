const express=require('express');
const userrouter=express.Router();

userrouter.get('/',(req,res)=>{
    res.render('userhome')
});

userrouter.get('/form',(req,res)=>{
    res.render('form')
});

module.exports=userrouter;
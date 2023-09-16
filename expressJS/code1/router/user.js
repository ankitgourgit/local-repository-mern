const express=require('express');
const userrouter=express.Router();

userrouter.get('/',(req,res)=>{
    res.send('user url executed')
});

userrouter.get('/passchange',(req,res)=>{
    res.send('user password url executed')
});

userrouter.get('/contact',(req,res)=>{
    res.send('contact url executed')
});

module.exports=userrouter;
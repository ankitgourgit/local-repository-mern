const express=require('express');
const indexrouter=express.Router()


indexrouter.get('/',(req,res)=>{
    res.send('Home Url Execute')
})

indexrouter.get('/about',(req,res)=>{
    res.send('About Url Execute')
})

indexrouter.get('/contact',(req,res)=>{
    res.send('Contact Url Execute')
})

indexrouter.get('/service',(req,res)=>{
    res.send('Service Url Execute')
})

indexrouter.get('/login',(req,res)=>{
    res.send('Login Url Execute')
})

module.exports=indexrouter;
const express=require('express')
const indexrouter=express.Router()

indexrouter.get('/',(req,res)=>{
    res.render('home')
})

indexrouter.get('/about',(req,res)=>{
    res.render('about')
})

indexrouter.get('/contact',(req,res)=>{
    res.render('contact')
})

indexrouter.get('/service',(req,res)=>{
    res.render('service')
})

indexrouter.get('/login',(req,res)=>{
    res.render('login')
})

indexrouter.get('/register',(req,res)=>{
    res.render('register')
})

module.exports=indexrouter
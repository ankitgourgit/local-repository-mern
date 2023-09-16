const express = require('express')
const app=express()

var route1="<h2>Click Here to link with page</h2><br/><br/><a href='/'>Home page</a><br/><a href='/about'>About page</a><br/><a href='/contact'>Contact page</a><br/><a href='/service'>Service page</a><br/><a href='/login'>Login page</a>"


app.use("/",(req,res,next)=>{
    console.log('request is received')
    next()
})

app.get('/',function(req,res){
    res.send('Home Url Execute'+route1)
})

app.get('/about',function(req,res){
    res.send('About Url Execute'+route1)
})

app.get('/contact',function(req,res){
    res.send('Contact Url Execute'+route1)
})

app.get('/service',function(req,res){
    res.send('Service Url Execute'+route1)
})

app.get('/login',function(req,res){
    res.send('Login Url Execute'+route1)
})

app.listen(3002);
const express=require('express');

var path= require('path');
var app =express();

app.get('/login',function(req,res){
     res.sendFile(path.join(__dirname+"/login.html"))

})

app.listen(7000);
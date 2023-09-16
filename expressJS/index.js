const express= require('express')
const app =express()

app.get('/',function(req,res){
    res.send('hiii  ankit')
})

app.listen(3000);
const express = require('express');
const bodyParser=require('body-parser');
const api = require('./api');

const port=8080;
const app=express();

app.listen(port,function(){
    console.log(`Server is running at port ${port}`);
})

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({extended:true}));

//parses the text as json
app.use(bodyParser.json());
app.use('/api', api);
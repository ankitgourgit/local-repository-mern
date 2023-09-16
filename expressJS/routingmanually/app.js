//middleware
const express= require('express');
const path = require ('path');
const app =express();

const indexrouter=require('./router/index')
const userrouter=require('./router/user')

//configration of static path
app.use(express.static(path.join(__dirname,'public')))

//configration for template page
app.set("view engine","ejs")
app.set("views","./views")

app.use("/",indexrouter);
app.use("/user",userrouter);

app.listen(3003)
console.log("for execution press http://localhost:3003")

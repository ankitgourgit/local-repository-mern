//middleware
const express= require('express');
const app=express();

const userrouter=require("./router/user");
const indexrouter=require("./router/index");

app.use("/",indexrouter);
app.use("/user",userrouter)


app.listen(3001);

console.log("for exection http://localhost:3001");
//middleware
const express= require('express');
const app=express();

const userrouter=require("./router/user");


app.set("view engine","ejs")
app.set("views","./views")

app.use("/user",userrouter)

app.listen(3001);

console.log("for exection http://localhost:3001");
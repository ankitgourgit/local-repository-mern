const mongoose = require('mongoose');
const conn=mongoose.connect("mongodb://0.0.0.0:27017/employeeDetails",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log("No connection");
})


module.exports=conn;
const mongoose =require('mongoose');
const con = mongoose.connect("mongodb://0.0.0.0:27017/workplace",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Connection Sucessfully")
}).catch((e)=>{
    console.log("No Connection")
});

module.exports = con;

const mongoose=require('mongoose');
//console.log("In connection");
const conn = mongoose.connect("mongodb://0.0.0.0:27017/students-api", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection Sucessfully");
}).catch((e)=>{
    console.log('No Connection'); 
});

module.exports = conn;

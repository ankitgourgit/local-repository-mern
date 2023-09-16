const mongoose = require('mongoose')
const conn=mongoose.connect("mongodb://0.0.0.0:27017/mymongodb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successfully');
}).catch((e)=>{
    console.log('No connection');
})
module.exports=conn;


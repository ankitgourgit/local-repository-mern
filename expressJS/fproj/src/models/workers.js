const mongoose =require('mongoose');

const workerSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//create collection

const Worker = new mongoose.model("Worker",workerSchema);
module.exports = Worker;
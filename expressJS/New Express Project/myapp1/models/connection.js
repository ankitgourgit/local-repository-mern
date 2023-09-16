var mongoose=require('mongoose')
var url="mongodb://127.0.0.1:27017/doct"
mongoose.connect(url)
var db=mongoose.connection
console.log("successfully connected to mongodb database")
module.exports=db
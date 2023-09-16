var db = require('./connection')
function indexmodel() {

this.loginCheck=(userDetail,cb)=>{
    db.collection("reg").find({"unm":userDetail.unm,"pwd":userDetail.pwd}).toArray((err,result)=>{
        if(err) 
        console.log(err)
        else
        cb(result)
    })
}
}
module.exports = new indexmodel()

    var db = require("./connection")
    function adminmodel() {
    
        this.fatchusers=(data,cb)=>{
            let x=parseInt(data.id)
            db.collection('reg').find({'role':'user'}).toArray((err,result)=>{
                if(result.length>0){
                    cb(result)
                }else{
                    console.log(err)
                }
            })
        }
    
    this.manageuserstatus=(data,cb)=>{
        if(data.s=="block"){
            db.collection('reg').updateOne({'_id':parseInt(data.regid)},{$set:{'status':0}},(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(result)
                }
            })
        }else{
            db.collection('reg').updateOne({'_id':parseInt(data.regid)},{$set:{'status':1}},(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    cb(result)
                }
            })
    
        }

    }
}

    module.exports = new adminmodel()
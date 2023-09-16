var db = require('./connection')
function indexmodel(){
    this.registration = (userDetails,cb) =>{
        
       db.collection("edu").find().toArray((err,result)=>{
        if (err)
        console.log(err)
        else{
            if(result.length > 0) {
             var max_id = result[0]._id;
             for(let row of result){
                if (max_id < row._id) {
                    max_id = row._id
                }
                userDetails._id = max_id + 1
             }

            }else{
                userDetails._id = 1
            }
        }
        userDetails.status = 1
            userDetails.role = "user"
            userDetails.dt = Date()
            db.collection("edu").insertOne(userDetails,(err,result) =>{
                    err ? console.log(err) : cb(result);
                })

        })
    }

    this.userUpdate=async (userUpdetl,cb)=>{
        x=parseInt(userUpdetl.id);
        let result =await db.collection('edu').updateOne(
            {'_id':x},

               { $set:{'Name':userUpdetl.Name,
               'Email':userUpdetl.Email,
               'mno':userUpdetl.mno,
               'unm':userUpdetl.unm,
               'pwd':userUpdetl.pwd}},(err,result)=>{
                    if(result>0)
                    {
                        cb(result);
                    }else{
                        console.log(err)
                    } 

    })
}

this.showData=(data,cb)=>{
    let x=parseInt(data.id);
    db.collection('edu').find({"_id":x}).toArray((err,result)=>{
        if(result.length>0)
        {
            cb(result)
        }else{
            console.log(err)
        }
    })
}

this.loginCheck  = (userDetails, cb) => {
    db.collection('edu').find({ "unm": userDetails.unm, "pwd": userDetails.pwd,'status':1 }).toArray((err, result) => {
        if(err){
            console.log(err)
        }else{
            cb(result)
        }
    })
}
    
}
module.exports = new indexmodel()
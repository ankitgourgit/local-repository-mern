var db = require('./connection')
function indexmodel() {

    this.loginCheck=(userDet,cb)=>{
        db.collection("reg").findOne({"unm":userDet.unm,"pwd":userDet.pwd}).toArray((err,result)=>{
            if(err)
            console.log(err)
            else
            cb(result)
        })
    }
    this.registration = (userDetails, cb) => {
        db.collection("reg").find().toArray((err, result) => {
            if (err)
                console.log(err)
            else {
                if (result.length > 0) {
                    var max_id = result[0]._id;
                    for (let row of result) {
                        if (max_id < row._id) {
                            max_id = row._id
                        }
                        userDetails._id = max_id + 1
                    }
                } else {
                    userDetails._id = 1
                }

            }

            userDetails.status = 1
            userDetails.role = "user"
            userDetails.dt = Date()
            db.collection("reg").insertOne
                (userDetails, (err, result) => {
                    err ? console.log(err) : cb(result);
                })

        })
    }

    this.userUpdate=async (userUpdetl,cb)=>{
        x=parseInt(userUpdetl.id);
        let result =await db.collection('reg').updateOne(
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
    db.collection('reg').find({"_id":x}).toArray((err,result)=>{
        if(result.length>0)
        {
            cb(result)
        }else{
            console.log(err)
        }
    })
}
}
module.exports = new indexmodel()
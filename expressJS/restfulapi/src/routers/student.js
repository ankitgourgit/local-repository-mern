const express=require('express');
const router=new express.Router();
const Student=require("../models/students");


//Create a new student api using promises
// router.post('/students',(req,res)=>{
//     console.log(req.body)
//     const user=new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })
 

//Create a new student api usind async and await
router.post('/students',async(req,res)=>{
    try{
        const user=new Student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }

})


//Read the data of registered stuents
router.get('/students',async(req,res)=>{
    try{
        const studentsData=await Student.find();
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})


//Get indivisual student data
router.get("/students/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData=await Student.findById(_id);
        console.log(studentData);

        if(!studentData){
            return res.status(404).send();
        }else{
            res.send(studentData);
        }

    }catch(e){
        res.status(500).send(e);

    }
})


//Update students by id
router.patch('/students/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudents=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(400).send(e);
    }
})


//Delete the students by id
router.delete('/students/:id',async(req,res)=>{
    try{
        const deleteStudent=await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send()
        }
        res.send(deleteStudent)

    }catch(e){
        res.status(500).send(e);


    }
})

module.exports=router;
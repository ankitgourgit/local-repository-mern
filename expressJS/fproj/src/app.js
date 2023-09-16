const express =require('express');
const path =require('path');
const app = express();
const con = require('./db/connect');
const Worker = require("./models/workers");
const ejs = require("ejs");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");

app.use(express.json());
app.use(express.static(static_path));

app.set("view engine","ejs");
app.set("views",templates_path);

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/register',async(req,res)=>{
    try{
        const WorkerList= await Worker.find({})

    }catch{

    }
});


app.post('/register',async(req,res)=>{ 
    console.log(req.body);
    try{
        const registerWorker = new Worker({
            fname: req.body.fname,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password  
        });
        console.log(registerWorker)
        
         const registered = await registerWorker.save();
         console.log(registered)
         res.status(201).render("index")

    }catch(e){
        res.status(400).send("Invalid Data");
    }
});


app.listen(port,()=>{
    console.log('Server is running on port '+port);
});



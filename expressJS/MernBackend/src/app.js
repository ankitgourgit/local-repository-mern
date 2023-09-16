const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const bcrypt = require('bcryptjs')
const conn = require("./db/connect");
const Register = require("./models/registers") 

const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");



// app.use(function (req, res, next) {
//   res.setHeader(
//     'Report-To',
//     '{"group":"csp-endpoint","max_age":10886400,"endpoints":[{"url":"https://your_server_ip:8081/__cspreport__"}],"include_subdomains":true}'
//   );
//   res.setHeader(
//     'Content-Security-Policy-Report-Only',
//     "default-src 'self'; font-src 'self' https://fonts.gstatic.com; img-src 'self' https://images.unsplash.com; script-src 'self' https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/ 'sha256-INJfZVfoUd61ITRFLf63g+S/NJAfswGDl15oK0iXgYM='; style-src 'self' https://fonts.googleapis.com https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css; frame-src 'self' https://www.youtube.com https://youtube.com; report-to csp-endpoint; report-uri /__cspreport__;"
//   );
//   next();
// });



app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(static_path));
app.set("view engine","hbs")
app.set("views",templates_path)
hbs.registerPartials(partials_path);

        
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// app.post('/__cspreport__', (req, res) => {
//   console.log(req.body);
// });


app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/showusers',async(req,res)=>{
    try{
        const workers = await Register.find({})
        res.render('showusers',{'userDetails':workers});

    }catch{

    }
})

app.post('/register',async(req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                password: password,
                confirmpassword: cpassword
            })
           const registered = await registerEmployee.save();
           res.status(201).render("index")

        }else{
            res.send("Password are not matching")
        }

    }catch(e){
        res.status(400).send("Invalid Record")
    }
})

app.get('/login',(req,res)=>{
    res.render("login");
})

app.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email});

        const isMatch = await bcrypt.compare(password,useremail.password)

        if(isMatch){
            res.status(201).render("index");
        }else{
            res.send("Password are not matching");
        }

    }catch(error){
        res.status(400).send("invalid Email")
    }
})

app.listen(port,()=>{
    console.log(`Server is running at port no. ${port}`);
})
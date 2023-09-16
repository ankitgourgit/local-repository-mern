//Event-eventEmitter

// import EventEmitter from 'events';

// class MyEmitter extends EventEmitter{ }
// const myEmitter = new MyEmitter()
// let m=0
// myEmitter.on('event',()=>{
//     console.log(m++)
// })

// myEmitter.emit('event') 
// myEmitter.emit('event') 
// myEmitter.emit('event') 
// myEmitter.emit('event') 



// var fs=require ('fs')
// var readstream=fs.createReadStream('./myfile.txt')
// readstream.on('open',function(){
//     console.log("this file is open");
// })



// var fs=require('fs')
// fs.readFile('myfile.txt','utf-8',(error,data)=>{
//     if(error) throw error
//     console.log(data)
// })
// console.log("this is my outside callback")


// var fs=require('fs')
// var data=fs.readFileSync('myfile.txt','utf-8')
// console.log(data)



// import* as fs from 'fs'

// fs.writeFileSync('docfile.txt','hello doc file')
// console.log("file created")

// var data=fs.readFileSync('docfile.txt','utf-8')
// console.log(data)


//callback

const students=[
    {name:"Ankit",subject:"javascript"},
     {name:"Anurag",subject:"java"}
]

function enrollstudent(student,callback){
    setTimeout(function(){
      students.push(student)
      callback();
    },1000);
}


function getstudent(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML=str;  
    },3000)
}

let newStudent={name:"sunny",subject:"python"}
enrollstudent(newStudent,getstudent);



//file system callback API

import * as fs from 'fs';

// Creating Directory -Path should be there
// fs.mkdir('AG',(error)=>{
//     if (error) throw error;
//     console.log("Directory Created...");
// });

//Creating Directory -Path is not required to be there
// fs.mkdir('test\\demo',{recursive:true},(error)=>{
//     if (error) throw error;
//     console.log("Directory Created....");
// })

//read content of directory
// fs.readdir('D:\\Universal TP\\MERN\\file system\\test',(error,files)=>{
//     if (error) throw error;
//     for(const file of files)
//     console.log(file);
// });

//remove Directory-directory should be empty
// fs.rmdir('D:\\Universal TP\\MERN\\file system\\test\\demo',(error)=>{
//     if(error) throw error;
//     console.log("Directory removed...")
// });

//create and write file
// fs.writeFile('readme.txt','Hello Node js',(error)=>{
//     if (error) throw error;
//     console.log("File Created...")
// });

//read file in code form
// fs.readFile('readme.txt',(error,data)=>{
//     if (error) throw error;
//     console.log(data)
// });

// read file in text format
// fs.readFile('readme.txt','utf-8',(error,data)=>{
//     if (error) throw error;
//     console.log(data)
// });

//Append data into file
// fs.appendFile('readme.txt','ShowsData',(error)=>{
//     if(error) throw error;
//     console.log("Data Appended...")
// });

//copy file
// fs.copyFile('readme.txt','info.txt',(error)=>{
//     if(error) throw error;
//     console.log("File Copied...")
// })


//get file information
fs.stat('promise.js',(error,stats)=>{
    if(error) throw error;
    console.log(stats.isDirectory());
    console.log(stats.isFile());
    console.log(stats);
})
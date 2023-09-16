//File system -synchronous API
import * as fs from 'fs';

//Create Directory -path should be there
//fs.mkdirSync('Bg');

//Create Directory -path is not requiered to be there
//fs.mkdirSync('test1\\demo1',{recursive: true});


//read content of Directory
// const files=fs.readdirSync('test1')
// for(const file of files)
// console.log(file);

//Remove Directory-Directory should be empty
// fs.rmdirSync('test1\\demo1');

//create and write file
// fs.writeFileSync('readme1.txt','hello node js');

//read file
//const data=fs.readFileSync('readme1.txt');
//console.log(data)

// const data=fs.readFileSync('readme1.txt','utf-8');
// console.log(data)

//Appended data into file
// fs.appendFileSync('readme1.txt','  added data');

//copy file
// fs.copyFileSync('readme1.txt','info1.txt');

//Get file Information 
const stats= fs.statSync('promise.js');
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);


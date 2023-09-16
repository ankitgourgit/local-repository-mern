//file system:
//const { Console } = require('console');
var fs=require('fs');
fs.writeFileSync("myfile.txt","hii ashwini");
fs.appendFileSync("myfile.txt", "   this is ankit");
var buf_data= fs.readFileSync("myfile.txt");
//console.log(buf_data);
org_data=buf_data.toString();
console.log(org_data);


//server creation...
import http from 'http';

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','Text/plain');
    res.end("My server start indore");
})

server.listen(8000,'localhost',()=>{
    console.log("http://localhost:8000")
})
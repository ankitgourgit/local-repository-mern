//creating web server-http module

import http from 'http';

/*const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain');
    res.end('response from server2');
});

server.listen(8000,'localhost',()=>{
    console.log('Server Running at http://localhost:8000');
});*/

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain');
    res.end('response from server 1 bhopal');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000');
});


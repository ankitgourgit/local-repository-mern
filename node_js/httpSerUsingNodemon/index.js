//creating web server-http module

import http from 'http';

const server = http.createServer((req,res)=>{
   res.setHeader('content-Type','text/plain');
   // res.end('response from serverAfterNodemon055501');
   res.write("hey you are my on the server")
   res.
   res.end()
   
});

server.listen(8000,'localhost',()=>{
    console.log('Server Running at http://localhost:8000');
});

/*const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain');
    res.end('response from server 1 bhopal');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000');
});*/


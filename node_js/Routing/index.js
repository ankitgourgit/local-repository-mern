//http Module - Routing and serve a page

import http from 'http';
import fs from 'fs';

const server =http.createServer((req,res)=>{
    res.writeHead(200,"OK",{'Content-Type': 'text/html'}) 
  //   res.end("<h1>Home page</h1>");
    //  if(req.url === '/'){
    //     res.end("<h1>Home page</h1>")
    //  }
    //  else if(req.url === '/about'){
    //     res.end("<h1>About page</h1>")
    //  }
    //  else
    //  {
    //     res.end("<h1> 404 page not found  </h1>")
    //  }
    if(req.url==='/'){
        fs.readFile('./public/home.html',(error,data)=>{
            if (error) throw error;
            res.end(data);
        })
    }
   else if(req.url==='/about'){
        fs.readFile('./public/about.html',(error,data)=>{
            if (error) throw error;
            res.end(data);
        })
    }
    else{
        res.end("<h1>404p page not found</h1>")
    }
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT,HOST,()=>{
    console.log('Server Running at http://localhost:8000');
});
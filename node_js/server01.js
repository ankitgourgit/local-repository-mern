 //url routing

var http=require('http')
var url=require('url')

http.createServer((req,res)=>{
    var urlobj=url.parse(req.url,true)
  //  console.log(urlobj)
  var msg
  if(urlobj.pathname=="/" || urlobj.pathname=="/home")
  msg="/or/home url invoked"
  else if(urlobj.pathname=="/about")
  msg="/about url invoked"
  else if(urlobj.pathname=="/contact")
  msg="/contact url invoked"
  else if(urlobj.pathname=="/login")
  {
    console.log("username="+urlobj.query.username)
    console.log("password="+urlobj.query.password)
    msg="/login url invoked" 
  }
  else
    msg="Invalid url invoked"

    res.write("<h1>"+msg+"</h1>")
    res.end()
  
}).listen(8081)

console.log("server invoked at link: http://localhost:8081");
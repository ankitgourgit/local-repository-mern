import http from 'http'
import url from 'url'

http.createServer((req, res) => {
    var urlobj = url.parse(req.url, true)
    var msg
    
    if (urlobj.pathname == "/" || urlobj.pathname == "/home")
        msg = "/or/home url invoked"
    else if (urlobj.pathname == "/about")
        msg = "/about url invoked"
    else if (urlobj.pathname == "/contact")
        msg = "/contact url invoked"
    else if (urlobj.pathname == "/service")
      
    {
        //console.log(req.method)

        if (req.method == "GET")
            msg = "/service url invoked & method GET "
        else if (req.method == "POST")
            msg = "/service url invoked & method POST"
        else if (req.method == "PUT")
            msg = "/service url invoked & method PUT"
        else if (req.method == "DELETE")
            msg = "/service url invoked & method DELETE"

        else
            msg = "/service url invoked & method ANONOMUS"
    }
    else if (urlobj.pathname == "/register")
        msg = "/register url invoked"
    else if (urlobj.pathname == "/login") {
        console.log("username=" + urlobj.query.username)
        console.log("username=" + urlobj.query.password)
        msg="/login url invoked"
    }
    else
    msg="Invalid url invoked"

    res.write("<h1>" + msg +"<h1>")
    res.end()

}).listen(8081)

console.log("server invoked at link: http://localhost:8081");
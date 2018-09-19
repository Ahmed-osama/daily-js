
let http  = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {
        'content-type':'text/plain'
    })
    res.end('Hello my 1st server')
}).listen(1337,'127.0.0.1')

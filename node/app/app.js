
let http  = require('http');
let fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {
        'content-type':'text/json'
    })
    let jsonFile = fs.readFileSync(__dirname + '/data.json')
    res.end(jsonFile)
}).listen(1337,'127.0.0.1')

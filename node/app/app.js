
let http  = require('http');
let fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {
        'content-type':'application/json'
    })
    fs.createReadStream(__dirname + '/data.json', 'utf8').pipe(res)

   
}).listen(4000,'127.0.0.1')

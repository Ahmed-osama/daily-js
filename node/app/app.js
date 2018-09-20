
let http  = require('http');
let fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {
        'content-type':'text/html'
    })
    let myFile = fs.readFileSync(__dirname + '/html.html', 'utf8')
    let name ="Ahmed"
    myFile.replace('{name}', name)
    res.end(myFile)
}).listen(4000,'127.0.0.1')

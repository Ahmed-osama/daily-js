
let http  = require('http');
let fs = require('fs');
http.createServer(function(req, res){
    if(req.url === '/govern'){

        res.writeHead(200, {
            'content-type':'application/json'
        })
        fs.createReadStream(__dirname + '/data.json', 'utf8').pipe(res)
    }else if(req.url === '/'){
        res.writeHead(200, {
            'content-type':'text/html'
        })
        fs.createReadStream(__dirname + '/html.html', 'utf8').pipe(res)
    }else{

        res.writeHead(404)
        res.end('worng page ya noty')
    }

   
}).listen(4000,'127.0.0.1')

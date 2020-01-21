const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const mimeTypes = {
  html: 'text/html',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  js: 'text/javascript',
  css: 'text/css',
};

http.createServer((request, response) => {
  const uri = url.parse(request.url).pathname;
  const fileName = path.join(process.cwd(), unescape(uri));
  console.log(`loading: ${uri}`);
  let stats;
  try {
    stats = fs.lstatSync(fileName);
  } catch {
    response.writeHead(404, {
      'Content-Type': 'text/plain'
    })
    response.write(`404  not found`)
    response.end()
  }
  if (!stats) return
  if (stats.isFile()) {
    const mimeType = mimeTypes[path.extname(fileName).split('.').reverse()[0]]
    response.writeHead(200, {
      'Content-Type': mimeType
    })
    const fileStream = fs.createReadStream(fileName)
    fileStream.pipe(response)
  } else if (stats.isDirectory()) {
    response.writeHead(302, {
      'location': 'index.html'
    })
    response.end()
  } else {
    response.writeHead(500, {
      'Content-Type': 'text/plain'
    });
    response.write('internal server error');
    response.end()
  }
}).listen(3000);


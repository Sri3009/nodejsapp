var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world \n');
}).listen(8080, '10.0.0.111');
console.log('Server running at http://10.0.0.111:8080/');

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><head><title>Sparkspace</title></head></html>');
}).listen(8019, "127.0.0.1");

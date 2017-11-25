var http = require('http');

http.createServer (function (req, res){

  res.writeHead(200, {'Content-Type': 'text/plan'});

  res.end('hell test req and res');
}).listen(3001);

console.log('Server running...');

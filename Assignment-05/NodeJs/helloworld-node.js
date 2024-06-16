var http = require("http");

http.createServer(function(req, res) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.write("Hello world");
res.end();
}).listen(8080);
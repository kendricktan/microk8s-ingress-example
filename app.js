var http = require('http');

var handleRequest = function(request, response) {
  response.writeHead(200);
  response.end(`Hello World from App ${process.env.APP_NAME || "<No Name!>"}`);
};

var www = http.createServer(handleRequest);

www.listen(8080);

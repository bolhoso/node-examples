var http = require("http");

function onRequest (request, response) {
	console.log ("Request received");
	response.writeHead (200, {"Content-type": "text/plain"});
	response.write ("Hello world!");
	response.end();
}

http.createServer (onRequest).listen (8080);
console.log ("Server started");

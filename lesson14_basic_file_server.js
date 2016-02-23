// https://www.youtube.com/watch?v=_D2w0voFlEk&ebc=ANyPxKqAf8RvTxo9sN1ibn-XCejWgeoRPao1efAPRrNl-ZMOi1n7YQWbSavY2I5vizprbCSTEMs0lnGuIZ5z4pXC71h_67fN_g#t=2.45967

var http = require('http');
var fs = require('fs');

// 404 - Response if things go bad 

function send404Response(response) {
	console.log("User made response we can't handle");
	response.writeHead(404,{"Content-Type": "text/plain"});
	response.write("Error 404: Page not found");
	response.end();
}

function onRequest(request, response) {
	console.log("A user made a request" + request.url);
	if (request.method == 'GET' && request.url == '/') {
		response.writeHead(200,{"Context-Type": "text/html"});
		fs.createReadStream("./lesson14_index.html").pipe(response);
	} else {
		send404Response(response);
	}
} 

// 8888 is a random port number we chose
http.createServer(onRequest).listen(8888);

console.log("Server is now running on port 8888");


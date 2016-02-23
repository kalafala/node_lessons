// https://www.youtube.com/watch?v=pYOltVz7kL0&ebc=ANyPxKqAf8RvTxo9sN1ibn-XCejWgeoRPao1efAPRrNl-ZMOi1n7YQWbSavY2I5vizprbCSTEMs0lnGuIZ5z4pXC71h_67fN_g

var http = require('http');

// 8888 is a random port number we chose
http.createServer(onRequest).listen(8888);

console.log("Server is now running on port 8888");

function onRequest(request, response) {
	console.log("A user made a request" + request.url);
	// 200 = Status code OK
	//
	response.writeHead(200,{"Context-Type": "text/plain"});
	response.write("Here is your response");
	response.end();
} 
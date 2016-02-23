// https://www.youtube.com/watch?v=54aol-U_1es&ebc=ANyPxKp6sBsvUPyYfT4XPyOdy-FGLwiN4fyRmpWkdLNnBxtQZtXcoJ1QDP6BqQ1hGb8ei5z9weeqFnyQS27xS_9y2YJ2AXFm6A

var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next) {
	console.log("doFirst called");
	// next below could be done conditionally, as you would expect
	next();  // run next in stack (doSecond)
	
}

function doSecond(request, response, next) {
	console.log("doSecond called")
	next();
}

function profile(request, response, next)
{
	console.log("user requested profile");
	next();
}

// Example of stacking "middleware"
app.use(doFirst);
app.use(doSecond);
app.use('/profile',profile); // localhost:8888/profile should call this

http.createServer(app).listen(8888);
console.log("Server is running on port 8888");



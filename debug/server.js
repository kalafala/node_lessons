/** 
 *  This is a simple server file to demonstrate the debug module.
 *  This is based on the examples from https://github.com/visionmedia/debug
 */

var express = require('express');
var http    = require('http');

var debug   = require('debug');  // We can require the general "debug" service.
var serverDebug = require('debug')('server');  // We can directly require and create a debug object.

serverDebug("Starting up the server.");

// We can scope the namespace of our debug stuff for example, "app"
var error = debug('app:error');  // By default this will redirect to stderr 
var log   = debug('app:log');   
log.log = console.log.bind(console);  // We need to bind our log debugger to stdout. 

log('Print some stdout debug stuff!');
error('Pring out some error stuff!');

var app = express();

app.get('/', function serveIndex(req, res, next) {
	serverDebug("We're serving up a file!");
	res.send("Okay!");
});

app.listen(8080, '0.0.0.0', function() {
	log("the server's up at 8080!");
});

require('./worker');

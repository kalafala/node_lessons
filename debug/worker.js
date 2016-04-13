// This is a stupid worker file.

var debug = require('debug')('worker');  // the name of this debug 'module' is "worker"

setInterval(function() {
	debug('Doing some work at an interval.');
}, 1000);

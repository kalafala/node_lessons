//https://www.youtube.com/watch?v=_cnJcXwwQRA&ebc=ANyPxKrU1FeP7wS06dB1eVATZik6GObleDbpQ2wCzuC2odTibWstNOVyokuwPdi1iEg5BDDMvMyodZlmu-j6mSx2uxKEvXRQHw

// Core modules - no need to include path at all !

// Common practice to name variable same as module
var fs = require('fs'); // file-system module
var path = require('path'); // file-path module

fs.writeFileSync("test_file", "test text" );
console.log(fs.readFileSync("test_file").toString());


var websiteHome = "/Users/kerimkalafala/node.js///my.html"

console.log("Raw name: ", websiteHome);

// normalize corrects all the slashes to something meaningful for this filesystem
console.log("Normalized: ", path.normalize(websiteHome));

console.log("Directory name: ", path.dirname(path.normalize(websiteHome)));

console.log("Base name: ", path.basename(websiteHome));

console.log("File extension: ", path.extname(websiteHome));

// Side discussion on __dirname and __filename

console.log(__dirname);
console.log(__filename);


// Side discussion on setInterval()
// As opposed to setTimeout() which calls once, 
//   setInterval() calls repeatedly at the given interval

setInterval(function() {
	console.log("I'm here");
}, 2000);	


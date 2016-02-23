// https://www.youtube.com/watch?v=jiSFfpw3Btc&index=1&list=PLexnxRP3h0cor5DBAoSoKh3tm0Xmjd9Hq

// Variables can be sets of key/value pairs
var person = {
	firstName: "Kerim",
	lastName: "Kalafala",
	age: 28
};

// Print details of "person"
console.log(person);

function addNumber(a, b) {
	return a+b;
}

// Print return value
console.log(addNumber(41, 39));

function worthless() {
	// do nothing at all
}

// Function without explicit return statement will return "undefined"
console.log(worthless());

// Can set a variable to an (anonymous) function
var printFunction = function() {
	console.log('I\'m being called');
}

printFunction();

// Can pass function to other functions !

setTimeout(printFunction, 5000); // second argument is time in milliseconds


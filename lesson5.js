// https://www.youtube.com/watch?v=kNHrHSTYs1U&list=PLexnxRP3h0cor5DBAoSoKh3tm0Xmjd9Hq&index=3

var Kerim = {
	favFood: "pizza",
	favMovie: "2010"
};

// Note that "Person" is a *reference* to Kerim
var Person = Kerim;
Person.favFood = "spinach"

console.log("Kerim\'s favorite food: ", Kerim.favFood);

// Difference between == and === 

console.log("Double equal compare: ", 19 == "19"); // two equal signs, compare value
console.log("Triple equal compare: ", 19 === "19"); // three equal signs, compare type AND value

// https://www.youtube.com/watch?v=uiZxziF4Ol8

// Illustration of "this" pointer
var Kerim = {
	printFirstName: function() {
			console.log("My name is Kerim");
			console.log("this == kerim: ", this == Kerim);
	}
}

Kerim.printFirstName();

// What happens with an anonymous function ?
// this == global 

function anon() {
	console.log("I am anonymous");
	console.log("this == Kerim: ", this == Kerim);
	console.log("this == global: ", this == global);
}

anon();
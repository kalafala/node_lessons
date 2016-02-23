//https://www.youtube.com/watch?v=KsjrN-T3ZCs&list=PLexnxRP3h0cor5DBAoSoKh3tm0Xmjd9Hq&index=2

// Illustrating non-blocking behavior

function placeAnOrder(orderNumber) {
	console.log("order number ",orderNumber," has been placed");
	cookAndDeliverOrder(function() {
		console.log("Food has been delivered for order ", orderNumber);
		}			
	);
}


// Simulate a 3 second operation
function cookAndDeliverOrder(callback) {
	// After 3 seconds call "callback"
	setTimeout(callback, 3000); // 3 seconds
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);



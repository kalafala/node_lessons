// https://www.youtube.com/watch?v=foUHJo8ZTu0&ebc=ANyPxKozlHn-9JTlxZ0DlMbRInEJA3NGLJ0Xn2xSRYX80pmTKZwujG9g6gumXvIpmsq163cSGA5LAOdb50qB7gaBQQDP5U3pvg

// Do not include .js extension below
// Use ./ below, so as to distinguish from "core modules"

var movies = require('./lesson11_movies');

var user2Movies = movies();
//user2Movies.favMovie = "User2 favorite";
console.log("User2 favorite movie: ", user2Movies.favMovie);

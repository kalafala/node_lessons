// https://www.youtube.com/watch?v=IW2M8G8uJ6o&ebc=ANyPxKqs63-P61DHZvLqKtT7aD0S8QnolDmh7xjBr7cTIeAGrfieI1cVtMPtlirGSMMRxWjICjvBEP_E2js2PIm4I8gRUxv7Cw

// Note that "classes" are defined as followed

function User() {
	this.name = "";
	this.lives = 100;
	this.giveLife = function giveLife(targetPlayer) {
			targetPlayer.lives++;
			this.lives--;
			console.log(this.name, "gave a life to ", targetPlayer.name);
	}
}

var Kerim = new User();
var Kristen = new User();

Kerim.name = "Kerim";
Kristen.name = "Kristen";

Kerim.giveLife(Kristen);

console.log(Kerim);
console.log(Kristen);

// Can add functions on-the-fly, via prototyping

User.prototype.fight = function (targetPlayer) {
		targetPlayer.lives-=3;
		console.log(this.name, "fought against ", targetPlayer.name);
}

Kristen.fight(Kerim);

console.log(Kerim);
console.log(Kristen);

// Can also add variables on-the-fly

User.prototype.magic = 60;
console.log("State after adding variable via prototyping")
console.log("Kerim.magic: ", Kerim.magic);
console.log("Kristen.magic: ", Kristen.magic);

console.log("Interestingly, console.log(object) doesn't seem to recognize new variable")
console.log(Kerim);
console.log(Kristen);





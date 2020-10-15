function Car(model, color, speed) {
	this.model = model;
	this.color = color;
	this.maxSpeed = speed;
}
Car.prototype.drive = function (speed) {
	console.log(`${this.model} is driving with ${speed}!`);
}

let ford = new Car('fordFiesta', 'red', 280);
let honda = new Car('Honda 1232', 'black', 320);

console.log( ford.maxSpeed);
honda.drive(200);
ford.drive(500)




function Car(model, color, speed) {
	this.model = model;
	this.color = color;
	this.maxSpeed = speed;
}
Car.prototype.drive = function (speed) {
	console.log(`${this.model} is driving with ${speed}!`);
}


let cars = [
	new Car('fordFiesta', 'red', 280),
	new Car('Honda 1232', 'black', 320)
]
for (let i = 0; i < cars.length; i++) {
	const car = cars[i];
	console.log(car.model);

}


let ford = {
	"model":'fordFiesta',
	'color': 'red',
	'maxSpeed': 280,
	'drive': function (speed) {
		console.log(`${this.model} is driving with ${speed}!`);
	}
}


let honda = {
	'model': 'Honda 1232',
	'color': 'black',
	'maxSpeed': 320,
	'drive': function (speed) {
		console.log(`${this.model} is driving with ${speed}!`);
	}
}

honda.drive(200);
ford.drive(300);


// honda.drive()


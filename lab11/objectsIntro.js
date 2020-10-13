let student1Arr = [ 6, 'pesho'];
let student2Arr = [ 5, 'maria'];

let student1Obj = {
	'score': 6,
	'name': 'pesho',
	'age': 24,
}

let carOfViki = {
	// properties
	'color': 'red',
	'maxSpeed': 250,

	// method
	'drive': function () {
		console.log(`I'm driving with ${this.maxSpeed}`);
	}
}

carOfViki.drive();
// console.log( carOfViki.color );


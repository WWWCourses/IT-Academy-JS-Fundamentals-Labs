let ford = {
	'color': 'red',
	'maxSpeed': 280,
	'address': {
		'country':'BG',
		'town':'Sofia'
	},
	'drive': function (speed) {
		console.log(`I'm driving with ${speed}!`);
	}
}

let fordPropName = 'color';
console.log( ford[fordPropName] );


// console.log(`The town of ford is: ${ford.address.town}`);
// console.log(`Ford max speed: ${ford.maxSpeed}`);
// ford.drive(100);
// ford.drive(200);


// let arr = [
// 	'BG',
// 	'Sofia'
// ]

let honda = {
	'color': 'black',
	'maxSpeed': 320,
	'doors':4
}


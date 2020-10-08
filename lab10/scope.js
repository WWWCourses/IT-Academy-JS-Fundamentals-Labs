let x = 1;

function foo(y) {
	var x = 4;
	console.log(`x in foo: ${x}`);
}

foo(3);
console.log(`x in main: ${x}`);

// `x in foo: 4
// x in main: 1

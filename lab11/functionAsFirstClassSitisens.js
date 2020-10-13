function foo( f ) {
	f();
}
foo(4);

let power = function ( x ) {
	return x**2;
};

let cub = function ( x ) {
	return x*x*x;
};


foo( power(2) );// foo( 4 )
foo( cub(2) );

//



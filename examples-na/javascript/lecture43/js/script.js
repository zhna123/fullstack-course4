/************** string concatination *******************/

var string = "Hello";
string += " World";
console.log(string + "!");

// regular math operations
console.log((5 + 4) / 3);
console.log(undefined / 5); // NaN - not a number
function test1 (a) {
	console.log(a / 5);
}
test1();  // NaN (indicates we didnt pass a value that supposed to be passed in)
 
// Equality
var x = 4, y = 4;
if (x == y) {
	console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
	console.log("x = '4' is equal to y=4");  // type coercion (dynamic convert type)
}

// strict Equality (will compare type first)
if (x === y) {
	console.log("strict: x='4 is equal to y=4");
} else {
	console.log("strict: x='4' is not equal to y=4");
}

// if statement (all false)
if (false || null ||
	undefined || "" || 0 || NaN) {
	console.log("This line wont ever execute");
} else {
	console.log("all false");  // can do Boolean(null) 
}

// if statement (all true)
if (true && "hello" && 1 && -1 && "false") {
	console.log("all true");
};

// best practice for {} style (not just style)
function b() {
	return {
		name: "Na"
	};
}
console.log(b());

// for loop
var sum = 0;
for (var i=0; i<10; i++) {
	console.log(i);
	sum = sum + i;
}
console.log("sum of 0-9 is: " + sum);











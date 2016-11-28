// functions are first-class data types
// functions are objects
function multiply(x, y) {
	return x * y;
}

// console.log(multiply(5, 3));

multiply.version = "v1.0.0";
// console.log(multiply.toString());
console.log(multiply.version);

// function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}
// multiplyBy3(is function as well) is a reference of myFunc
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10))

// create doubleAll function by calling makeMultiplier function
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


// passing functions as arugments
function doOperaionOn(x, operaion) {
	return operaion(x);
}
var result = doOperaionOn(5, multiplyBy3);
console.log(result);
result = doOperaionOn(100, doubleAll);
console.log(result);
/*********** passing variables by value VS by references **********/
// primitives are passed/copied by value 
// objects are passed/copied by reference

// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b)

// b = 5;
// console.log("after b update: " );
// console.log("a: " + a);
// console.log("b: " + b);


// var a = {x: 7};
// var b = a; // point to the same object a point to
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update: ");
// console.log(a);
// console.log(b);  // point to same memory location


// pass by reference vs by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue = 5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value = 7;
// changePrimitive(value); // primValue = value
// console.log("after changePrimitive, orig value:")
// console.log(value);  // value just copied to primValue, but value itself is not changed

function changeObject(objValue) {
	console.log("in changeObject...");
	console.log("before: ");
	console.log(objValue);

	objValue.x = 5;
	console.log("after");
	console.log(objValue);
}

value = {x: 7};
changeObject(value);  // objValue = value
console.log("after changeObject, orig value:");
console.log(value);  // point to same memory location



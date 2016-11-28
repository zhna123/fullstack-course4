/************** built in types *******************/
 // object type - collection of name/value pairs

 // primitive types are single(not object), immutable value (cant change its value after set)
 // Boolean - true or false
 // undefined - no value every been set
 // null - lack of value - lack of definition - ok to set to null
 // Number - only numeric type - double precision 64 bit floating point
 // String - "" ''
 // Symbol - new to ES6 

 // should be undefined
 // undefined - value has been declared, a memory is allocated, but not set yet
 var x;
 console.log(x);

 // undefined is a reserved key word
 if (x == undefined) {
 	console.log("x is undefined");
 };

 x = 5;
 if (x == undefined) {
 	console.log("x is undefined");
 } else {
 	console.log("x has been defined");
 }
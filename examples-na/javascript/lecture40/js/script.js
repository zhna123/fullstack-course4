/************ variables *****************/

// variable definition should always start with 'var'
// no types are declared
// JS is dynamically typed language
// same variable can hold different types during the life of the execution

var x = "Hello World!";

/************ functions ****************/

function a () {

}
// value of function assigned, NOT the returned result!
var a = function () {}

// invoke function
a();

function compare (x, y) {
	return x > y;
}

// pass in argument
var a = compare(4, 5);
compare(4, "a");
// all arguments are optional
compare();

/******************** Scope ***************************/
// Global - variables and functions defined here are available everywhere

// Function (lexical) - where the function is pysically defined. Variables and functions
// defined here are available only within this function

/******************** scope chain ******************/
// everything is executed in an Execution Context
// function invocation creates a new Execution Context
// Each Execution Context has
// 1) its own variable environment
// 2) special 'this' object
// 3) reference to its outer environment
// Global scope does not have an Outer Environment as it's the most outer there is


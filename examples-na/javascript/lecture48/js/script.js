// this keyword
// function test() {
// 	console.log(this); // point to global window
// 	//console.log("Hello Coursera!");
// 	this.myName = "Na";
// }
// test();
// console.log(window.myName);

// function constructors (capitalize first letter)
function Circle(radius) {
	//console.log(this);
	this.radius = radius;
	// shouldn't have return value

	// this.getArea = 
	// 	function () {
	// 		return Math.PI * Math.pow(this.radius, 2);
	// 	};
	// below should not put in constructor
	// waste processing
	// Circle.prototype.getArea =
	// 	function () {
	// 		return Math.PI * Math.pow(this.radius, 2);
	// 	};
}
// set prototype property
// only created once; not created for every single instance of that object
Circle.prototype.getArea =
		function () {
			return Math.PI * Math.pow(this.radius, 2);
		};

// create object
var myCircle = new Circle(10);  // "this" refer to Circle
console.log(myCircle);

var myOtherCircle = new Circle(20);
console.log(myOtherCircle)
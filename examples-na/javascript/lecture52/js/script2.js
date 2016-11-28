(function(window) {
	// want to expose johnGreeter to outside
	// so we will set it onto window object
	var johnGreeter = {};
	johnGreeter.name = "John";
	// this greeting only visible to inside function
	var greeting = "Hi ";
	johnGreeter.sayHi = function () {
		console.log(greeting + johnGreeter.name);
	}
	window.johnGreeter = johnGreeter;


})(window);







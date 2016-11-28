(function(window) {
	var naGreeter = {};
	naGreeter.name = "Na";
	var greeting = "Hello ";
	naGreeter.sayHello = function () {
		console.log(greeting + naGreeter.name);
	}
	// exposed to outside (the window object)
	window.naGreeter = naGreeter;
})(window);  // pass in window object
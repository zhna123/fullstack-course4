// closures
function makeMultiplier (multiplier) {
	// var multiplier = 2;
	function b() {
		console.log("multiplier is: " + multiplier);
	}
	b();

	return (
		// memory space created
		function (x) {
			// multiplier defined in the outer exec context
			return multiplier * x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));  // its own exec env
// closures is to allow the doubleAll function can still see multiplier value
// when function returned as outer function value, it creates memory space for the returned function value
// so when the function being called and gets its own exec env, it can still get multiplier from memory
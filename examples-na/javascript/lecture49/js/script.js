// Object literals and "this"
var literalCircle = {   // new Object()
	radius: 10,

	getArea: function() {
		var self = this;
		console.log(this);

		var increaseRadius = function () {
			// this.radius = 20;  // this set to global
			self.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);

		return Math.PI * Math.pow(this.radius, 2);
	}
};

//literalCircle.getArea();
console.log(literalCircle.getArea());
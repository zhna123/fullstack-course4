// default values
function orderChickenWith(sideDish) {
	// if (sideDish === undefined) {
	// 	sideDish = "whatever";
	// }
	sideDish = sideDish || "whatever"; // quick way to set up default value
	console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
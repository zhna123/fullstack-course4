// DOM manipulation
// in global scope, which is window (window has document property)
// console.log(document.getElementById("title"))
// console.log(document instanceof HTMLDocument)

function sayHello () {
	// console.log (
	// 	document.getElementById("name").value
	// );
	var name = document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";

	// document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;

	if (name === "student") {
		// like css selector
		var title = document.querySelector("h1").textContent;
		title += " & Lovin' it!";

		document.querySelector("#title").textContent = title;
	}
}
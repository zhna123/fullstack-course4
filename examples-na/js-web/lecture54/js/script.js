// event handling
// listen to event
document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello (event) {
		console.log(this);  
		// if this points to button now, we can directly set the text on button
		this.textContent = "said it!";
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

// unobstrusive event binding
// "this" points to event container now (button object)
document.querySelector("button").addEventListener("click", sayHello);

// assign onclick property
// document.querySelector("button").onclick = sayHello;

	}

);


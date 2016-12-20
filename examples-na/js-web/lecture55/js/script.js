// event handling
// listen to event
document.addEventListener("DOMContentLoaded",
	function (event) {

		function sayHello (event) {
			console.log(event); 
			console.log(this); // button
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
		document.querySelector("button").addEventListener("click", sayHello);

		document.querySelector("body").addEventListener("mousemove",
			function (event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);

				}
			}
		);


	}

);


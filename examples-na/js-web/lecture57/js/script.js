// event handling
document.addEventListener("DOMContentLoaded",
	function (event) {
		document.querySelector("button")
			.addEventListener("click", function () {

				$ajaxUtils
					.sendGetRequest("/js-web/lecture57/data/name.txt", 
						function (request) {
							var name = request.responseText;
							// need to place this inside call back function (async call)
							document.querySelector("#content")
								.innerHTML = "<h2> Hello " + name + "!";
						}
				);
			})
	}

);

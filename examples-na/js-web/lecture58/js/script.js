// event handling
document.addEventListener("DOMContentLoaded",
	function (event) {
		document.querySelector("button")
			.addEventListener("click", function () {

				$ajaxUtils
					.sendGetRequest("/js-web/lecture58/data/name.json", 
						// returned response is an object now
						function (res) {
							var message = res.firstName + " " + res.lastName;
							if (res.likesChineseFood) {
								message += " likes Chinese food";
							}
							else {
								message += " doesn't like Chinese food";
							}
							message += " and uses ";
							message += res.numberOfDisplays + 1;
							message += " displays for coding.";
							// need to place this inside call back function (async call)
							document.querySelector("#content")
								.innerHTML = "<h2>" + message;
						}
				);
			})
	}

);

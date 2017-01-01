(function (global) {

	// will expose to outside
	var ajaxUtils = {};

	function getRequestObject() {
		if (window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveObject) {
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported!");
			return (null);
		}
	}

	// attach sendGetRequest to ajaxUtils
	ajaxUtils.sendGetRequest = 
		// responseHandler function
		function(requestUrl, responseHandler, isJsonResponse) {
			var request = getRequestObject();
			// set up parameters of request
			// different stages of network communication
			request.onreadystatechange = 
				function() {
					handleResponse(request, responseHandler, isJsonResponse);
				};
			// true indicates async
			request.open("GET", requestUrl, true);
			request.send(null); // for post
		};

	function handleResponse(request, responseHandler, isJsonResponse) {
		if ((request.readyState == 4) && (request.status == 200)) {
			// default to isJsonResponse = true
			if (isJsonResponse == undefined) {
				isJsonResponse = true;
			}
			if (isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
		}
	}

	// expose utility to the global object
	global.$ajaxUtils = ajaxUtils;

}) (window);
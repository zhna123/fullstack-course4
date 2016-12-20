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
		function(requestUrl, responseHandler) {
			var request = getRequestObject();
			// set up parameters of request
			// different stages of network communication
			request.onreadystatechange = 
				function() {
					handleResponse(request, responseHandler);
				};
			// true indicates async
			request.open("GET", requestUrl, true);
			request.send(null); // for post
		};

	function handleResponse(request, responseHandler) {
		if ((request.readyState == 4) && (request.status == 200)) {
			responseHandler(request);
		}
	}

	// expose utility to the global object
	global.$ajaxUtils = ajaxUtils;

}) (window);
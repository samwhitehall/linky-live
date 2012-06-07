var requestHandler = require("./requestHandler");

function route(handle, pathName, response, postData) {
	console.log("Routing request for " + pathName);
	
	if(typeof handle[pathName] == 'function') {
		return handle[pathName](response, postData);
	} else {
		return requestHandler.flat_html(response, postData, pathName);
	}
}

exports.route = route;
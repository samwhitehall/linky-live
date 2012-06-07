var requestHandler = require("./requestHandler");

function route(handle, pathName, response, postData) {
	console.log("Routing request for " + pathName);
	
	if(typeof handle[pathName] == 'function') {
		return handle[pathName](response, postData);
	} else {
		return requestHandler.static_file(response, postData, pathName);
	}
}

exports.route = route;
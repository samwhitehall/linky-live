function route(handle, pathname, response, postData) {
	console.log("Routing request for " + pathname);
	
	if(typeof handle[pathname] == 'function') {
		return handle[pathname](response, postData);
	} else {
		console.log("No handler for " + pathname);
		
		response.writeHead(404, {"Content-Type" : "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;
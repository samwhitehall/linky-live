var http = require('http');
var url = require('url');

function start(route, handle) {
	http.createServer(function(request, response) {
		var postData = "";
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + ".");
		
		// As POST data chunk comes in, add to postData buffer
		request.setEncoding("utf8"); // received data should be UTF-8
		request.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk " + postDataChunk + ".");
		});
		
		// Route request only on callback when all POST data has been received
		request.addListener("end", function() {
			route(handle, pathname, response, postData);
		});
		
	}).listen(8888);
	
	console.log("Server listening on 8888...")
}

exports.start = start;
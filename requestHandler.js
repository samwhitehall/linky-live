var fs = require('fs');

function start(response, postData) {
	console.log("requestHandler 'start' was called.");

	var body = 'Hello World!';

	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write(body);
	response.end();
}

function flat_html(response, postData, pathName) {
	fs.readFile('html/' + pathName, function(error, data) {
		// Most likely 404: send relevant message
		if(error) {
			response.writeHead(404, {"Content-Type" : "text/html"});
			response.write("<h1>404 @ " + pathName + "</h1><p>" + error + "</p>");
			response.end();
			return;
		}
		
		// Otherwise, send file contents
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write(data);
		response.end();
	});
}

exports.start = start;
exports.flat_html = flat_html;
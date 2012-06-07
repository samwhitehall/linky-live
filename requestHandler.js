function start(response, postData) {
	console.log("requestHandler 'start' was called.");

	var body = 'Hello World!';
	
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(body);
		response.end();
}

exports.start = start;
var fs = require('fs');

function start(response, postData) {
	console.log("requestHandler 'start' was called.");

	var body = 'Hello World!';

	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write(body);
	response.end();
}

function sample1(response, postData) {
	fs.readFile('html/sample1.html', function(error, data) {
		if(error) throw error;
		
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.write(data);
		response.end();
	});
}

exports.start = start;
exports.sample1 = sample1;
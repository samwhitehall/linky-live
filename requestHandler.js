var fs = require('fs');
var querystring = require('querystring');

var hitCounter = 0;
var links = {};

function start(response, postData) {
	console.log("requestHandler 'start' was called.");

	var body = 'Hello World!';

	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write(body);
	response.end();
}

// serve a static file
function static_file(response, postData, pathName) {
	console.log("requestHandler 'static_file' was called.");
	var contentType = "text/plain";
	
	// set correct MIME type based on extension
	if(pathName.substr(pathName.length - 4) === 'html') {
		contentType = "text/html";
	} else if(pathName.substr(pathName.length - 2) === 'js') {
		contentType = "text/javascript";
	}
	
	fs.readFile('static/' + pathName, function(error, data) {
		// Most likely 404: send relevant message
		if(error) {
			response.writeHead(404, {"Content-Type" : "text/html"});
			response.write("<h1>404 @ " + pathName + "</h1><p>" + error + "</p>");
			response.end();
			return;
		}
		
		// Otherwise, send file contents
		response.writeHead(200, {"Content-Type" : contentType});		
		response.write(data);
		response.end();
	});
}

// register a new hit on the page
function registerHit(response, postData) {
	hitCounter += 1;
	console.log(hitCounter);
	
	response.writeHead(200, {
			'Content-Type': 'text/plain',
			'Access-Control-Allow-Origin' : '*'
		});
	response.write("Hits: " + hitCounter);
	response.end();
}

function registerHover(response, postData) {
	// extract postData
	var hoverDetails = querystring.parse(postData);
	
	if(links[hoverDetails.a_id]) {
		links[hoverDetails.a_id] += 1;
	} else {
		links[hoverDetails.a_id] = 1;
	}
	
	console.log("\n" + hoverDetails.a_id + ": " + links[hoverDetails.a_id] + "\n");
	
	response.writeHead(200);
	response.end();
}

exports.start = start;
exports.static_file = static_file;
exports.registerHit = registerHit;
exports.registerHover = registerHover;
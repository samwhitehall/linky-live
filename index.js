// 
//  index.js
//  clicky-live
//  
//  Executed by running "node index"
//  Based on structure from Manuel Kiessling's "The Node Beginner Book"
//		http://www.nodebeginner.org/
// 


var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

// set of url stubs to pass to the appropriate function
var handle = {}
handle["/"] = requestHandler.start;
handle["/registerHit"] = requestHandler.registerHit;

server.start(router.route, handle);
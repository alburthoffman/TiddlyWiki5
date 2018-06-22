/*\
title: $:/core/modules/serverroute/get-status.js
type: application/javascript
module-type: serverroute

GET /status

\*/
(function() {

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.method = "GET";

exports.path = /^\/status$/;

exports.handler = function(request,response,state) {
	response.writeHead(200, {"Content-Type": "application/json"});
	var text = JSON.stringify({
		username: state.authenticatedUsername,
		space: {
			recipe: "default"
		},
		tiddlywiki_version: $tw.version
	});
	response.end(text,"utf8");
};

}());

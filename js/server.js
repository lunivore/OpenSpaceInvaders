"use strict";
/* jslint node */

var express = require('express');

var app = express.createServer();

app.configure(function () {
	app.use(express.static(__dirname + '/static'));
		app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

var start = function () {
    app.listen(8019);
};

exports.start = start;


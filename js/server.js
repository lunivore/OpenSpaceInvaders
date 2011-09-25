"use strict";
/* jslint node */

var http = require('http'),
	htmlLoader = require('./htmlLoader'),
	responseLoader = require('./responseLoader'),
	express = require('express');

var app = express.createServer();

app.configure(function () {
	app.use(express.static(__dirname + '/html'));
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true
	}));
});

var start = function () {
    app.listen(8019);
};

exports.start = start;


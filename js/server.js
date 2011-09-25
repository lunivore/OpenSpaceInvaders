"use strict";

var http = require('http'),
    htmlLoader = require('./htmlLoader'),
    responseLoader = require('./responseLoader');

var start = function () {
    var onRequest = function (request, response) {
        responseLoader.load(request.url, response, htmlLoader);

    };
    http.createServer(onRequest).listen(8019);
};

exports.start = start;


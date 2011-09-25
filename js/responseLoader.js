"use strict";

var path = require("path"),
    fs = require("fs"),
    responseWriter = require('./responseWriter'),
    fileResolver = require('./fileResolver');

var writeStaticFile = function (fileName, response) {
    path.exists(fileName, function (exists) {
        if (exists) {
            fs.readFile(fileName, "binary", function (err, file) {
                if (err) {
                    responseWriter.write(response, 500, err + "\n");
                    return;
                }

                responseWriter.write(response, 200, file, { "Content-Type" : "text/css"});
            });
            return;
        }

        responseWriter.write(response, 404, "Not found");

    });
};

var load = function (url, response, htmlLoader) {

    var fileName = fileResolver.resolve(url);

    if (url === "/favicon.ico") {
        return;
    }

    if (url.indexOf("/static") === 0) {
        writeStaticFile(fileName, response);
        return;
    }

    htmlLoader.load(fileName, response);
};

exports.load = load;
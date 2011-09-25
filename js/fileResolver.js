"use strict";

var resolveHtml = function (fileName) {

    var htmlFileLocation = "/js/html/", fileLocation = process.cwd();

    fileLocation += htmlFileLocation;
    fileLocation += fileName;
    fileLocation += ".html";

    return fileLocation;
};

var resolveStatic = function (fileName) {
    return process.cwd() + fileName;
};

var resolve = function (fileName) {
    if (fileName.indexOf("/static") === 0) {
        return resolveStatic(fileName);
    }
    return resolveHtml(fileName);
};

exports.resolve = resolve;
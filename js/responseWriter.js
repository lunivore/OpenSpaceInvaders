"use strict";

var write = function (response, status, content, params) {

    var statusCode =  status || 200,
        contentToWrite = content || "",
        contentType = (params && params["Content-Type"]) ? params["Content-Type"] : "text/html";

    response.writeHead(statusCode, {"Content-Type" : contentType});
    response.write(contentToWrite);
    response.end();

};

exports.write = write;
var write = function(response, statusCode, content) {

    statusCode = (statusCode) ? statusCode : 200;
    content = (content) ? content : "";

    response.writeHead(statusCode, {"Content-Type" : "text/html"})
    response.write(content);
    response.end();

};

exports.write = write;
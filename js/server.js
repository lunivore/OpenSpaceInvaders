var http = require('http');
var htmlLoader = require('./htmlLoader')

var start = function() {
    var onRequest = function(request, response) {
        htmlLoader.load('board', response);

    };
    http.createServer(onRequest).listen(8019);
};

exports.start = start;


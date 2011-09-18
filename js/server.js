var http = require('http');
var board = require('./board');

var start = function() {
    var onRequest = function(request, response) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.write(board.build().showBoard());
        response.end();
    };
    http.createServer(onRequest).listen(8019);
};

exports.start = start;


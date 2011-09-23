// integration tests

var htmlLoader = require('../htmlLoader');

describe("html loader", function() {

    var fakeResponse;

    beforeEach(function() {
        fakeResponse = {};
        fakeResponse.writeHead = function() {};
        fakeResponse.write = function() {};
        fakeResponse.end = function() {};
    });

    it("should write a 404 response if there is no content", function() {

        var responseWritten = false;
        fakeResponse.writeHead = jasmine.createSpy()
                .andCallFake(function() { responseWritten = true; });
        
        htmlLoader.load("nofilehere", fakeResponse);

        waitsFor(function() {
            return responseWritten;
        });

        runs(function () {
            expect(fakeResponse.writeHead).toHaveBeenCalledWith(404, jasmine.any(Object));
        });

    });

    it("should write a 200 response with the file content if it exists", function() {

        var responseWritten = false;
        fakeResponse.writeHead = jasmine.createSpy()
                .andCallFake(function() { responseWritten = true; });

        htmlLoader.load("test", fakeResponse);

        waitsFor(function() {
            return responseWritten;
        });

        runs(function () {
            expect(fakeResponse.writeHead).toHaveBeenCalledWith(200, jasmine.any(Object));
        });

    });

    // Note: no test for 500 response, no idea how to fake a file read error
});
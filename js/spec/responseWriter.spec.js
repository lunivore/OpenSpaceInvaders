"use strict";

var responseWriter = require('../responseWriter');

describe("response writer", function () {

    var fakeResponse;

    beforeEach(function () {
        fakeResponse = {};
        fakeResponse.writeHead = function () {};
        fakeResponse.write = function () {};
        fakeResponse.end = function () {};
    });

    it("should set the content type to text/html", function () {

        var expectedContentType = {"Content-Type": "text/html"};
        fakeResponse.writeHead = jasmine.createSpy();

        responseWriter.write(fakeResponse);

        expect(fakeResponse.writeHead).toHaveBeenCalledWith(jasmine.any(Number), expectedContentType);
    });

    it("should set the HTTP status code correctly", function () {

        fakeResponse.writeHead = jasmine.createSpy();

        responseWriter.write(fakeResponse, 200);
        expect(fakeResponse.writeHead).toHaveBeenCalledWith(200, jasmine.any(Object));

        responseWriter.write(fakeResponse, 404);
        expect(fakeResponse.writeHead).toHaveBeenCalledWith(404, jasmine.any(Object));

    });

    it("should set the HTTP status code to 200 if not passed in", function () {

        fakeResponse.writeHead = jasmine.createSpy();

        responseWriter.write(fakeResponse);
        expect(fakeResponse.writeHead).toHaveBeenCalledWith(200, jasmine.any(Object));

    });

    it("should write the content to the response", function () {

        fakeResponse.write = jasmine.createSpy();

        var expectedContent = "Something something";
        responseWriter.write(fakeResponse, 200, expectedContent);

        expect(fakeResponse.write).toHaveBeenCalledWith(expectedContent);
    });

    it("should write a blank string if no content is sent", function () {

        fakeResponse.write = jasmine.createSpy();

        responseWriter.write(fakeResponse);

        expect(fakeResponse.write).toHaveBeenCalledWith("");

    });

    it("should end the response", function () {

        fakeResponse.end = jasmine.createSpy();

        responseWriter.write(fakeResponse);

        expect(fakeResponse.end).toHaveBeenCalled();

    });

    it("should set the content type if it's passed in", function () {

        fakeResponse.writeHead = jasmine.createSpy();

        responseWriter.write(fakeResponse, null, null, {"Content-Type" : "text/plain"});

        expect(fakeResponse.writeHead).toHaveBeenCalledWith(jasmine.any(Number), {"Content-Type" : "text/plain"});
    });

});
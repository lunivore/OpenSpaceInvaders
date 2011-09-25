"use strict";

var responseLoader = require('../responseLoader');

describe("response loader", function () {

    var fakeResponse = {},
        realStaticUrl = "/static/test.css";

    beforeEach(function () {
        fakeResponse = {};
        fakeResponse.writeHead = function () {};
        fakeResponse.write = function () {};
        fakeResponse.end = function () {};
    });

    it("should tell html loader to load the 'board' response", function () {

        var response = { id: 'response_object'}, // id is to validate in expect below
            htmlLoader = {};

        htmlLoader.load = jasmine.createSpy();

        responseLoader.load("/", response, htmlLoader);

        expect(htmlLoader.load).toHaveBeenCalledWith(jasmine.any(String), response);

    });


    it("should write a content type of text/css for static files", function () {
        var url = "/static/test.css",
            responseWritten = false;

        fakeResponse.writeHead = jasmine.createSpy().andCallFake(function () { responseWritten = true; });

        responseLoader.load(url, fakeResponse, {});

        waitsFor(function () {
            return responseWritten;
        });

        runs(function () {
            expect(fakeResponse.writeHead).toHaveBeenCalledWith(jasmine.any(Number), {"Content-Type": "text/css"});
        });

    });

    it("should set http status to 200 if static file is found", function () {

        var responseWritten = false;
        fakeResponse.writeHead = jasmine.createSpy().andCallFake(function () { responseWritten = true; });

        responseLoader.load(realStaticUrl, fakeResponse, {});

        waitsFor(function () {
            return responseWritten;
        });

        runs(function () {
            expect(fakeResponse.writeHead).toHaveBeenCalledWith(200, jasmine.any(Object));
        });

    });

    it("should set http status to 404 if static file is not found", function () {

        var responseWritten = false;
        fakeResponse.writeHead = jasmine.createSpy().andCallFake(function () { responseWritten = true; });

        responseLoader.load("/static/nofilehere.css", fakeResponse, {});

        waitsFor(function () {
            return responseWritten;
        });

        runs(function () {
            expect(fakeResponse.writeHead).toHaveBeenCalledWith(404, {"Content-Type": "text/html"});
        });

    });


    it("should write file contents if the URL begins with static/", function () {

        var responseWritten = false;
        fakeResponse.write = jasmine.createSpy().andCallFake(function () { responseWritten = true; });

        responseLoader.load(realStaticUrl, fakeResponse, {});

        waitsFor(function () {
            return responseWritten;
        });

        runs(function () {
            expect(fakeResponse.write).toHaveBeenCalled();
        });

    });

    it("should end the response if the file is found", function () {

        var responseEnded = false;
        fakeResponse.end = jasmine.createSpy().andCallFake(function () { responseEnded = true; });

        responseLoader.load(realStaticUrl, fakeResponse, {});

        waitsFor(function () {
            return responseEnded;
        });

        runs(function () {
            expect(fakeResponse.end).toHaveBeenCalled();
        });

    });

});
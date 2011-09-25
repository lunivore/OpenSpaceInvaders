"use strict";

var fileResolver = require('../fileResolver');

// todo: make resolve one function and pass to a different one depending on file name
describe("resolution of HTML file names", function () {

    it("should add a prefix of the current working directory", function () {

        var currentWorkingDirectory = process.cwd(),
            fileLocation = fileResolver.resolve("myfile");

        expect(fileLocation).toStartWith(currentWorkingDirectory);

    });

    it("should contain the file name passed in", function () {

        var fileLocation = fileResolver.resolve("myfile");

        expect(fileLocation).toContain("myfile");
    });

    it("should add a prefix of /js/html/ after the current working directory and before the file name", function () {

        var currentWorkingDirectory = process.cwd(),
            fileName = "myfile",
            fileLocation = fileResolver.resolve(fileName),
            locationParts = fileLocation.split("/js/html/");

        expect(locationParts.length).toBe(2);
        expect(locationParts[0]).toBe(currentWorkingDirectory);
        expect(locationParts[1]).toContain(fileName);
    });

    it("should add HTML to the file name", function () {

        var fileLocation = fileResolver.resolve("blahblah");

        expect(fileLocation).toEndWith(".html");
    });
});

describe("resolution of files in static folder", function () {

    it("should only add a prefix of the current working directory", function () {

        var fileName = "/static/myfile.css",
            currentWorkingDirectory = process.cwd(),
            fileLocation = fileResolver.resolve(fileName);

        expect(fileLocation).toBe(currentWorkingDirectory + fileName);

    });

});


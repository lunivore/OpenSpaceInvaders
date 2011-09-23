var fileResolver = require('../fileResolver')


describe("file resolver", function() {
    
    it("should add a prefix of the current working directory", function () {

        var currentWorkingDirectory = process.cwd();
        var fileLocation = fileResolver.resolve("myfile");

        expect(fileLocation).toStartWith(currentWorkingDirectory);

    });

    it("should contain the file name passed in", function() {

        var fileLocation = fileResolver.resolve("myfile");

        expect(fileLocation).toContain("myfile");
    });

    it("should add a prefix of /js/html/ after the current working directory and before the file name", function() {

        var currentWorkingDirectory = process.cwd();
        var fileName = "myfile";
        var fileLocation = fileResolver.resolve(fileName);

        var locationParts = fileLocation.split("/js/html/");
        
        expect(locationParts.length).toBe(2);
        expect(locationParts[0]).toBe(currentWorkingDirectory);
        expect(locationParts[1]).toContain(fileName);
    });

    it("should add HTML to the file name", function() {

        var fileLocation = fileResolver.resolve("blahblah");

        expect(fileLocation).toEndWith(".html");
    });
});
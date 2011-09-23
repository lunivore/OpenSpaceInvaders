var resolve = function (fileName) {

    var htmlFileLocation = "/js/html/";

    var fileLocation = process.cwd();
    fileLocation += htmlFileLocation;
    fileLocation += fileName;
    fileLocation += ".html";

    return fileLocation;
};

exports.resolve = resolve;
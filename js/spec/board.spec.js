var board = require('../board');

describe("Open Space Board", function() {

    it("should return a string with some HTML", function() {

        var html = board.build().showBoard();
        expect(html.length).toBeGreaterThan(0);
        expect(html).toContain("<html>");
        expect(html).toContain("</html>");

    });

    it("should contain a title of 'Sparkspace'", function() {
        var html = board.build().showBoard();
        expect(html).toContain("<title>Sparkspace</title>")
    });
});
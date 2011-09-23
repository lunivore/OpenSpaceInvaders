var loadMatchers = function() {
    beforeEach(function() {

        this.addMatchers({
            toStartWith: function(startString) {
                if (!this.actual) {
                    return false;
                }
                return this.actual.indexOf(startString) === 0;
            },

            toEndWith: function(endString) {
                if (!this.actual) {
                    return false;
                }
                var str = this.actual;
                var match = str.substr(str.length - endString.length);
                return match === endString;
            }

        });
    });
}

exports.loadMatchers = loadMatchers;
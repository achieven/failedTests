exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
    createModule: function (str1, str2) {
        var thisObject = this
        this.greeting = str1;
        this.name = str2;
        this.sayIt = function () {
            return thisObject.greeting + ', ' + thisObject.name
        }
        return this
    }
};

exports = (typeof window === 'undefined') ? global : window;
const _ = require('underscore')

exports.objectsAnswers = {
    alterContext: function (fn, obj) {
        return fn.call(obj)
    },

    alterObjects: function (constructor, greeting) {
        constructor = function(name, greeting){
            this.name = name
            this.greeting = greeting
            return this
        }
        return constructor('', greeting)
    },

    iterate: function (obj) {
        var arr = []
        Object.keys(obj).forEach(function (key) {
            arr.push('' + key + ': ' + obj[key])
        })
        return arr
    }
};

exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        return fn.apply(null, arr);
    },

    speak: function (fn, obj) {
        return fn.call(obj)
    },

    functionFunction: function (str) {
        if(!this.flag){
            this.flag = true
            this.str = str + ', '
            return this.functionFunction.bind(this)
        }
        else {
            this.flag = false
            this.str += str
            return this.str
        }
        
    }
}

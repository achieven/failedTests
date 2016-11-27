exports = (typeof window === 'undefined') ? global : window;
const _ = require('underscore');

exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        var mod3 = num % 3 === 0;
        var mod5 = num % 5 === 0;
        if (mod3 && mod5) {
            return 'fizzbuzz'
        }
        else if (num % 3 === 0) {
            return 'fizz'
        }
        else if (num % 5 === 0) {
            return 'buzz'
        }
        else if (_.isNumber(num)) {
            return num
        }
        else {
            return false;
        }
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible by 3 and 5, the function should return
        // 'fizzbuzz';
        //
        // otherwise the function should return the number, or false if no number
        // was provided or the value provided is not a number

    }
};

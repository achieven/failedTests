exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var regex = /\d+/g;
    return regex.test(str);
  }
};

exports = (typeof window === 'undefined') ? global : window;
var _ =  require('underscore');

exports.arraysAnswers = {
  append : function(arr, item) {
    return _.isArray(arr) && arr.concat(item);
  },

  truncate : function(arr) {
      return _.isArray(arr) && arr.slice(0, arr.length-1)
  },

  prepend : function(arr, item) {
    return _.isArray(arr) && [item].concat(arr);
  }
};

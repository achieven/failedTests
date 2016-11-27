exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    for(var i = 0; i < (end - start) * 10; i++){
      console.log(i)
    }
  }
};

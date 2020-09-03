Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    throw new Error('this is not a function')
  }
  var args = Array.prototype.slice.call(arguments, 1)
  var _this = this
  return function () {
    var innerArgs = Array.prototype.slice.call(arguments);
    var finalArgs = args.concat(innerArgs);
    return _this.apply(context, finalArgs);
  }
}


function a(m, n, o){
  return this.name + ' ' + m + ' ' + n + ' ' + o;
}

var b = {name : 'kong'};

console.log(a.myCall(b)(1,2,3))
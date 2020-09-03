function Promise (executor) {
  var _this = this;
  this.state = 'pending'
  this.value = undefined
  this.reason = undefined
  this.sucFunc = []
  this.failFunc = []

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e.message);
  }

  function resolve (value) {
    if (_this.state === 'pending') {
      _this.value = value
      _this.status = 'resolve'
      _this.sucFunc.forEach(f => f(value))
    }
  }

  function reject (reason) {
    if (_this.state === 'pending') {
      _this.reason = reason
      _this.status = 'reject'
      _this.failFunc.forEach(f => f(reson))
    }
  }
}
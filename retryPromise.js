function retryPromise(source, options) {
  var validator = options.validator;
  var attempts = options.attempts;
  var retryArgs = options.retryArgs || [];
  var retryCount = 0;
  
  return function retryOnInvalid() {
    var args = arguments;
    if (attempts < retryCount) {
      throw new Error('Method ' + source.name + ' failed after retrying ' + attempts + ' times');
    }

    function retry() {
      retryCount += 1;
      var methodArgs = retryArgs.length > 0 ? retryArgs : args;
      return retryOnInvalid.apply(null, methodArgs);
    }

    return source.apply(null, args).then((d) => {
      if (validator(d)) {
        retryCount = 0;
        return d;
      }
      return retry();
    });
  };
}

module.exports = retryPromise
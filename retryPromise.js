function defaultValidator() { return true; }

function retryPromise(source, options) {
  var validator = options.validator || defaultValidator;
  var attempts = options.attempts || 1;
  var retryArgs = options.retryArgs || [];
  var retryCount = 0;

  function shouldContinue() {
    return attempts > retryCount ;
  }
  
  return function retryOnInvalid() {
    var args = arguments;
    
    function retry() {
      if (!shouldContinue()) {
        throw new Error('Method ' + source.name + ' failed after retrying ' + attempts + ' times');
      }
      retryCount += 1;
      var methodArgs = retryArgs.length > 0 ? retryArgs : args;
      return retryOnInvalid.apply(null, methodArgs);
    }

    return source.apply(null, args).then((d) => {
      if (validator(d)) {
        return d;
      }
      return retry();
    })
    .catch(retry);
  };
}

module.exports = retryPromise;
function defaultValidator() { return true; }

function retryPromise(source, options) {
  options = options || {};
  var validator = options.validator || defaultValidator;
  var retries = options.retries || 1;
  var retryArgs = options.retryArgs;
  var retryCount = 0;

  function shouldContinue() {
    return retries > retryCount ;
  }
  
  return function retryOnInvalid() {
    var args = arguments;
    
    function retry() {
      if (!shouldContinue()) {
        throw new Error('Method ' + source.name + ' failed after ' + retries + ' retries');
      }
      retryCount += 1;
      var methodArgs = retryArgs || args;
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
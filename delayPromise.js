function isFunction(value) {
  return typeof value === "function";
}

function delayPromise(time, value) {
  function afterTimeout() {
    if (isFunction(value)) {
      return value();
    }
    return value;
  }
  new Promise((resolve) => setTimeout(resolve, time)).then(afterTimeout);
}

module.exports = delayPromise;

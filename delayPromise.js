/**
 * Returns a promise that is delayed by the specified time.
 * If 'value' is provided, it is the resolved value of the promise
 * @param {number} time milliseconds to delay
 * @param {any} value Can be undefined or a value to be returned after the delay.
 * @returns
 */
function delayPromise(time, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  }).then(function () {
    return value;
  });
}

module.exports = delayPromise;

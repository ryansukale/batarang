function isFunction(val) {
  return typeof val === "function";
}

/**
 * Inserts the return value of a function into an array. This is very similar to Ramda's intersperse
 * with the only difference being that this function also accepts a function as an argument
 * This is useful if your array is not a primitive, e.g. if you have an array of dom nodes, or react elements
 * and want to insert some other dom nodes, like dom separators, this function lets you easily achieve that.
 * @param {Function} getSeparator A function that returns the separator to be inserted
 * @param {Array} arr An array of arbitrary data
 * @returns
 */
function intersperseWith(getSeparator, arr) {
  var len = arr.length;
  var result = [],
    i = 0;
  var numberOfSeparators = 0;

  while (i < len) {
    if (i === len - 1) {
      result = result.concat(arr[i]);
    } else {
      ++numberOfSeparators;
      result = result.concat(
        arr[i],
        isFunction(getSeparator)
          ? getSeparator(i + numberOfSeparators)
          : getSeparator
      );
    }
    i++;
  }

  return result;
}

module.exports = intersperseWith;

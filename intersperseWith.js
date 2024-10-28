/**
 * Inserts the return value of a function into an array. This is very similar to Ramda's intersperse
 * with the only difference being that this function also accepts a function as an argument
 * that is invoked alternatively with the array element and once with nothing so you can return a custom separator
 * This is useful if your array is not a primitive, e.g. if you have an array of dom nodes, or react elements
 * and want to insert some other dom nodes, like dom separators, this function lets you easily achieve that.
 * @param {Function} getSeparator A function that returns the separator to be inserted
 * @param {Array} arr An array of arbitrary data
 * @returns
 */
function intersperseWith(fn, arr) {
  var len = arr.length;
  if (len === 0) return [];
  var result = [],
    index = 0;
  var numberOfSeparators = 0;
  var totalSeparators = len - 1;
  var totalElements = len + totalSeparators;

  while (index < totalElements) {
    if (index % 2 === 0) {
      result.push(fn(arr[index - numberOfSeparators], index));
    } else {
      result.push(fn(undefined, index));
      numberOfSeparators++;
    }
    index++;
  }

  return result;
}

module.exports = intersperseWith;

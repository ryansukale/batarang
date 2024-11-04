/**
 * Inserts the return value of a function into an array. This is very similar to Ramda's intersperse
 * with the only difference being that it invokes a function for every index at which the separator will be insered
 * e.g. This is especially handy if you have an array of dom nodes or react elements
 * and want to insert some other dom nodes, like dom separators
 * @param {Function} getSeparator A function that returns the separator to be inserted
 * @param {Array} arr An array of arbitrary data
 * @returns
 */
function intersperseWith(getSeparator, arr) {
  var len = arr.length;
  if (len === 0) return [];
  var result = [],
    index = 0;
  var numberOfSeparators = 0;
  var totalSeparators = len - 1;
  var totalElements = len + totalSeparators;

  while (index < totalElements) {
    if (index % 2 === 0) {
      result.push(arr[index - numberOfSeparators]);
    } else {
      result.push(getSeparator(index));
      numberOfSeparators++;
    }
    index++;
  }

  return result;
}

module.exports = intersperseWith;

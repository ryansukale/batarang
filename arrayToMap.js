// Converts an array of objects into a keyed object
function arrayToMap(arr, key) {
  key = key || 'id';
  var isFunction = typeof key === 'function';

  if (!arr) {
    return {};
  }
  return arr.reduce(
    function (accumulator, current) {
      if (isFunction) {
        accumulator[key(current)] = current;
      } else {
        accumulator[current[key]] = current;
      }
      return accumulator;
    },
    {}
  );
}

module.exports = arrayToMap;
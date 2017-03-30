// Converts an array of objects into a keyed object
var defaultKey = 'id'

function arrayToMap(arr, key) {
  key = key || defaultKey;

  if (!arr) {
    return {};
  }
  return arr.reduce(
    function (acc, curr) {
      acc[curr[key]] = curr;
      return acc;
    },
    {}
  );
}

module.exports = arrayToMap;
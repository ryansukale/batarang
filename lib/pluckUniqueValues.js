var defaultKey = 'id';

function pluckUniqueValues(arr, key) {
  key = key || defaultKey;
  var hash = {};
  var result = [];

  arr.map(function (d) {
    var value = d[key];

    if (!hash[value]) {
      hash[value] = true;
      result.push(value);
    }
  });

  return result;
}

module.exports = pluckUniqueValues;
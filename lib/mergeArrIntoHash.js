var arrayToMap = require('./arrayToMap');

function mergeArrIntoHash(hash, arr, key, is_mmutable, immutable_options) {
  var obj = arrayToMap(arr, key);

  if (is_mmutable) {
    return hash.merge(obj, immutable_options);
  }

  console.log(obj);

  return Object.assign({}, hash, obj);
}

module.exports = mergeArrIntoHash;
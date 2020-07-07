var curry = require('@ramda/curry');

var toHash = curry(function (getKey, items) {
  return items.reduce(function (hash, item) {
    hash[getKey(item)] = item;
    return hash;
  }, {})}
);

module.exports = toHash;
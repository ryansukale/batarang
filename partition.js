var curry = require('@ramda/curry');

var partition = curry(function (getKey, items) {
  let lastKey;
  let currentDivision;
  let partitions = [];

  items.forEach(item => {
    const currentKey = getKey(item);
    if (lastKey !== currentKey) {
      currentDivision = [];
      partitions.push(currentDivision);
    }
    currentDivision.push(item);
    lastKey = currentKey;
  });

  return partitions;
})

module.exports = partition;
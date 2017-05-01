function cycle(arr) {
  var len = arr.length - 1;
  var index;

  function getNextIndex() {
    if (index === undefined || index === len) {
      return 0;
    }
    return index + 1;
  }

  function getPrevIndex() {
    if (index === undefined || index === 0) {
      return len;
    }
    return index - 1;
  }

  return {
    next: function () {
      index = getNextIndex();
      return {
        value: arr[index],
        index: index,
        done: false
      };
    },

    prev: function () {
      index = getPrevIndex();
      return {
        value: arr[index],
        index: index,
        done: false
      };
    }
  };
}

module.exports = cycle;
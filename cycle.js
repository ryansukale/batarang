function cycle(arr) {
  len = arr.length - 1;
  index = len;

  function getNextIndex() {
    if (index === len) {
      return 0;
    }
    return index + 1;
  }

  return {
    next: function () {
      index = getNextIndex();
      return {
        value: arr[index],
        index: index
      };
    }
  };
}

module.exports = cycle;
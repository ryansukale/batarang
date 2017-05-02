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

  function next() {
    index = getNextIndex();
    return {
      value: arr[index],
      index: index,
      done: false
    };
  }

  function prev() {
    index = getPrevIndex();
    return {
      value: arr[index],
      index: index,
      done: false
    };
  }

  function nextVal() {
    return next().value;
  }

  function prevVal() {
    return prev().value;
  }

  return {
    next: next,
    prev: prev,
    nextVal: nextVal,
    prevVal: prevVal
  };
}

module.exports = cycle;
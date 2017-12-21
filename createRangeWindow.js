function createRangeWindow(index, maxIndex, windowSize) {
  var items = [index];
  var remaining = windowSize - 1;

  var upperBoundary = index + remaining > maxIndex ? maxIndex : index + remaining;
  
  for (var i = index + 1; i <= upperBoundary; i++) {
    items.push(i);
  }

  if (items.length === windowSize) {
    return items;
  }

  for (var j = index - 1; j >-1 && items.length < windowSize; j--) {
    items.unshift(j);
  }
  return items;
}

module.exports = createRangeWindow;
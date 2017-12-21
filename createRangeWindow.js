function createRangeWindow(index, maxIndex, size) {
  var items = [index];
  var remaining = size - 1;

  var upperBoundary = index + remaining > maxIndex ? maxIndex : index + remaining;
  
  for (var i = index + 1; i <= upperBoundary; i++) {
    items.push(i);
  }

  if (items.length === size) {
    return items;
  }

  for (var j = index - 1; j >-1 && items.length < size; j--) {
    items.unshift(j);
  }
  return items;
}

module.exports = createRangeWindow;
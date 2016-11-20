function sortByField(items, field, order) {
  if (!items) return;

  var comparator;

  if (order === 'DESC') {
    comparator = function (item1, item2) {
      return item1[field] < item2[field] ? 1 : -1;
    };
  } else {
    comparator = function (item1, item2) {
      return item1[field] > item2[field] ? 1 : -1;
    };
  }

  return items.sort(comparator);
}

module.exports = sortByField;
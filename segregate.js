function sum(x, y) {
  return x + y;
}

// This will do the calc for determining the actual number of groups
function getGroups(groups, items) {
 var length = items.length;
  
  if (!groups.length) {
    return [length];
  }

  var total = groups.reduce(sum, 0);

  if (length > total) {
    return groups.concat(length - total);
  }

  return groups;
}

// It does an uneven split of any generic item array into groups.
// The function signature uses an order that will be more "functional", so data last.
function segregate(condition, items) {
  if (Array.isArray(condition)) {
    var initialValue = {nextIndex: 0, groups: []};
    var distribution = getGroups(condition, items);

    return distribution.reduce(function(acc, count) {
      var nextIndex = acc.nextIndex;
      var groups = acc.groups;

      groups.push(items.slice(nextIndex, nextIndex + count))

      return {
        nextIndex: nextIndex + count,
        groups: groups
      };
    }, initialValue).groups;
  }

  if (typeof condition === 'function') {
    return items.reduce((acc, item) => {
      const key = condition(item);
      acc[key] = (acc[key] || []).concat(item);
      return acc;
    }, {});
  }
}


module.exports = segregate;

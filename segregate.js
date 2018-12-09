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

// This does an uneven split of any generic item array into groups.
function segregate(groups, items) {
  var initialValue = {nextIndex: 0, groups: []};
  var distribution = getGroups(groups, items);

  return distribution.reduce(function(acc, count) {
    var nextIndex = acc.nextIndex;
    var groups = acc.groups;
    var end = nextIndex + count;
    
    if (nextIndex > items.length) {
      return {
        nextIndex: nextIndex,
        groups: groups
      };
    }

    return {
      nextIndex: end,
      groups: groups.concat([items.slice(nextIndex, end)])
    };
  }, initialValue).groups;
}

module.exports = segregate;

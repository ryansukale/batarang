function diffMonths(first, second) {
  var before, after;
  if (first < second) {
    before = first;
    after = second;
  } else {
    before = second;
    after = first;
  }

  var beforeCalendarMonth = before.getMonth();
  var afterCalendarMonth = after.getMonth();
  var beforeYear = before.getFullYear();
  var afterYear = after.getFullYear();
  
  if (beforeYear === afterYear) {
    return afterCalendarMonth - beforeCalendarMonth;
  }

  return (12 * (afterYear - beforeYear)) + (afterCalendarMonth - beforeCalendarMonth);
}

module.exports = diffMonths;
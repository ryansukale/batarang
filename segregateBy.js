function segregateBy(condition, items) {
  return items.reduce(function (acc, item) {
    const key = condition(item);
    acc[key] = (acc[key] || []).concat(item);
    return acc;
  }, {});
}

module.exports = segregateBy;

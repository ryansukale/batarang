var treeForEach = require("./treeForEach");

function treeFilter(predicate, tree) {
  var result = [];
  function filter(node) {
    if (predicate(node)) {
      result.push(node);
    }
  }

  treeForEach(filter, tree);
  return result;
}

module.exports = treeFilter;

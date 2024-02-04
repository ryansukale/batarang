function treeForEach(callback, tree) {
  function traverse(node) {
    console.log("callback", node.name);
    console.log("node.children.length", node.children?.length);
    callback(node);

    if (Array.isArray(node.children)) {
      node.children.forEach(traverse);
    }
  }

  traverse(tree);
}

module.exports = treeForEach;

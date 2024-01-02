function filterNodesInTree(predicate, tree) {
    let result = [];
  
    function search(node) {
      if (predicate(node) {
        result.push(node);
      }
  
      if (Array.isArray(node.children)) {
        for (let child of node.children) {
          search(child);
        }
      }
    }
  
    search(tree);
    return result;
  }
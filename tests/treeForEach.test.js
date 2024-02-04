var chai = require("chai");
var expect = chai.expect;
var ROOT = "../";

var treeForEach = require(ROOT + "/treeForEach");

var rootNode = { name: "rootNode" };
var nodeA = { name: "nodeA" };
var nodeB = { name: "nodeB" };
var nodeA1 = { name: "nodeA1" };

var tree = {
  ...rootNode,
  children: [{ ...nodeA, children: [nodeA1] }, { ...nodeB }],
};

describe("treeForEach", () => {
  it("invokes the callback for each node in the tree", () => {
    var expectedNodeNames = [
      rootNode.name,
      nodeA.name,
      nodeA1.name,
      nodeB.name,
    ];
    var nodeNames = [];
    var callback = (node) => {
      nodeNames.push(node.name);
    };

    treeForEach(callback, tree);
    expect(nodeNames).to.deep.equal(expectedNodeNames);
  });
});

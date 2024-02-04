var chai = require("chai");
var expect = chai.expect;
var ROOT = "../";

var treeFilter = require(ROOT + "/treeFilter");

var rootNode = { name: "rootNode", age: 10 };
var nodeA = { name: "nodeA", age: 12 };
var nodeB = { name: "nodeB", age: 16 };
var nodeA1 = { name: "nodeA1", age: 17 };

var tree = {
  ...rootNode,
  children: [{ ...nodeA, children: [nodeA1] }, { ...nodeB }],
};

describe("treeFilter", () => {
  it("returns an array of nodes that satisfy the predicate", () => {
    var expectedNodes = [nodeA1, nodeB];
    var callback = (node) => node.age > 15;
    expect(treeFilter(callback, tree)).to.deep.equal(expectedNodes);
  });
});

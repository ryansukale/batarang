var chai = require("chai");
var expect = chai.expect;
var ROOT = "../";

var intersperseWith = require(ROOT + "/intersperseWith");

describe("intersperseWith", () => {
  it("insert a separator when called with a non-function separator", () => {
    expect(intersperseWith("separator", [1, 2])).to.deep.equal([
      1,
      "separator",
      2,
    ]);
  });

  it("returns an array with the separator interspersed between array elements", () => {
    const getSeparator = (idx) => `<span key="${idx}">--</span>`;

    const foo = "<span>FOO</span>";
    const bar = "<span>BAR</span>";

    expect(intersperseWith((idx) => `-${idx}-`, [])).to.deep.equal([]);

    expect(intersperseWith((idx) => `-${idx}-`, [0])).to.deep.equal([0]);

    expect(intersperseWith((idx) => `-${idx}-`, [0, 2])).to.deep.equal([
      0,
      `-1-`,
      2,
    ]);

    expect(
      intersperseWith(getSeparator, ["<span>FOO</span>", "<span>BAR</span>"])
    ).to.deep.equal([foo, '<span key="1">--</span>', bar]);
  });
});

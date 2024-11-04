var chai = require("chai");
var expect = chai.expect;
var ROOT = "../";

var intersperseWith = require(ROOT + "/intersperseWith");

describe("intersperseWith", () => {
  it("returns an array with the separator interspersed between array elements", () => {
    const getSeparator = (idx) => `<span key="${idx}">--</span>`;

    const foo = "<span>FOO</span>";
    const bar = "<span>BAR</span>";
    const baz = "<span>BAZ</span>";

    expect(intersperseWith(getSeparator, [])).to.deep.equal([]);

    expect(intersperseWith(getSeparator, [0])).to.deep.equal([0]);

    expect(intersperseWith(getSeparator, [0, 2])).to.deep.equal([
      0,
      `<span key="1">--</span>`,
      2,
    ]);

    expect(intersperseWith(getSeparator, [foo, bar, baz])).to.deep.equal([
      foo,
      '<span key="1">--</span>',
      bar,
      '<span key="3">--</span>',
      baz,
    ]);
  });
});

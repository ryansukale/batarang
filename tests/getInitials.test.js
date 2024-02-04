var chai = require("chai");
var expect = chai.expect;
var ROOT = "../";

var getInitials = require(ROOT + "/getInitials");

describe("getInitials", () => {
  it("returns null when nothing is passed", () => {
    expect(getInitials()).to.equal("");
  });

  it("returns the initials for a string", () => {
    expect(getInitials("barack Hussein obama")).to.equal("BO");
    expect(getInitials("barack Hussein Obama")).to.equal("BO");
    expect(getInitials("Barack")).to.equal("B");
    expect(
      getInitials(" Barack Hussein with extra words and spaces    obama    ")
    ).to.equal("BO");
  });
});

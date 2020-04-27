var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var isBetween = require(ROOT + '/isBetween');

describe('isBetween', function () {
  it('returns true if a value is within a range', function () {
    var range = {min: 10, max: 20};
    expect(isBetween(range, 11)).to.equal(true);
    expect(isBetween(range)(11)).to.equal(true);
    expect(isBetween(range, 10)).to.equal(true);
    expect(isBetween(range, 20)).to.equal(true);
  });

  it('returns false if a value outside of the range', function () {
    var range = {min: 10, max: 20};
    expect(isBetween(range, 21)).to.equal(false);
    expect(isBetween(range)(9)).to.equal(false);
  });
});
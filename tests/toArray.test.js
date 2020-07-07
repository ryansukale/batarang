var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var toArray = require(ROOT + '/toArray');

describe('toArray', function () {
  it('takes a value and returns an array', function () {
    var val = 10;
    expect(toArray(val)).to.deep.equal([val]);
  });

  it('returns the original argument if it is already an array', function () {
    var arr = [10];
    expect(toArray(arr)).to.deep.equal(arr);
  });

  it('returns an empty array if the argument is empty', function () {
    expect(toArray()).to.deep.equal([]);
  });
});
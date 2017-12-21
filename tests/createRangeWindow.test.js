var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var createRangeWindow = require(ROOT + '/createRangeWindow');

describe('createRangeWindow', function () {
  it('adds `size` number of items when the windowSize is high', function () {
    expect(createRangeWindow(0, 10, 4)).to.deep.equal([0, 1, 2, 3]);
  });

  it('adds as many items as it can until it reaches windowSize, but cannot cycle back', function () {
    expect(createRangeWindow(0, 2, 4)).to.deep.equal([0, 1, 2]);
  });

  it('adds as many items as it reaches windowSize, then cycles back adding decrementing values', function () {
    expect(createRangeWindow(2, 3, 4)).to.deep.equal([0, 1, 2, 3]);
  });

  it('adds as many items as it reaches windowSize, then cycles back on boundary condition', function () {
    expect(createRangeWindow(3, 3, 2)).to.deep.equal([2, 3]);
  });
});
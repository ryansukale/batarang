var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var segregate = require(ROOT + '/segregate');

describe('segregate', function() {
  var items = ['a', 'b', 'c', 'd', 'e'];

  it('segregates an array of items into groups', function () {
    var groups = [1, 2, 2];
    var result = segregate(groups, items);

    expect(result.length).to.equal(3);
    expect(result[0]).to.deep.equal(['a']);
    expect(result[1]).to.deep.equal(['b', 'c']);
    expect(result[2]).to.deep.equal(['d', 'e']);
  });

  it('segregates an array of items into groups when group total < item total', function () {
    var groups = [1, 2];
    var result = segregate(groups, items);

    expect(result.length).to.equal(3);
    expect(result[0]).to.deep.equal(['a']);
    expect(result[1]).to.deep.equal(['b', 'c']);
    expect(result[2]).to.deep.equal(['d', 'e']);
  });

  it('segregates an array of items into groups when group total > item total', function () {
    var groups = [1, 10];
    var result = segregate(groups, items);

    expect(result.length).to.equal(2);
    expect(result[0]).to.deep.equal(['a']);
    expect(result[1]).to.deep.equal(['b', 'c', 'd', 'e']);
  });

  it('segregates an array of items into groups when group total > item total and incorrect', function () {
    var groups = [1, 10, 20];
    var result = segregate(groups, items);

    expect(result.length).to.equal(2);
    expect(result[0]).to.deep.equal(['a']);
    expect(result[1]).to.deep.equal(['b', 'c', 'd', 'e']);
  });
});

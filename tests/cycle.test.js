var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var cycle = require(ROOT + '/cycle');

describe('cycle', function() {
  it('calling next() cycles forward through an array', function () {
    var items = ['a', 'b', 'c'];
    var iter = cycle(items);

    expect(iter.next()).to.deep.equal({value: 'a', index: 0});
    expect(iter.next()).to.deep.equal({value: 'b', index: 1});
    expect(iter.next()).to.deep.equal({value: 'c', index: 2});
    expect(iter.next()).to.deep.equal({value: 'a', index: 0});
  });

  it('calling prev() cycles backward through an array', function () {
    var items = ['a', 'b', 'c'];
    var iter = cycle(items);

    expect(iter.prev()).to.deep.equal({value: 'c', index: 2});
    expect(iter.prev()).to.deep.equal({value: 'b', index: 1});
    expect(iter.prev()).to.deep.equal({value: 'a', index: 0});
    expect(iter.prev()).to.deep.equal({value: 'c', index: 2});
  });
});
var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var cycle = require(ROOT + '/cycle');

describe('cycle', function() {
  it('calling next() cycles forward through an array', function () {
    var items = ['a', 'b', 'c'];
    var iter = cycle(items);

    expect(iter.next()).to.deep.equal({value: 'a', index: 0, done: false});
    expect(iter.next()).to.deep.equal({value: 'b', index: 1, done: false});
    expect(iter.next()).to.deep.equal({value: 'c', index: 2, done: false});
    expect(iter.next()).to.deep.equal({value: 'a', index: 0, done: false});
  });

  it('calling prev() cycles backward through an array', function () {
    var items = ['a', 'b', 'c'];
    var iter = cycle(items);

    expect(iter.prev()).to.deep.equal({value: 'c', index: 2, done: false});
    expect(iter.prev()).to.deep.equal({value: 'b', index: 1, done: false});
    expect(iter.prev()).to.deep.equal({value: 'a', index: 0, done: false});
    expect(iter.prev()).to.deep.equal({value: 'c', index: 2, done: false});
  });

  it('calling nextVal() cycles forward through an array and returns just the next value', function () {
    var items = ['a', 'b', 'c'];
    var iter = cycle(items);

    expect(iter.nextVal()).to.deep.equal('a');
    expect(iter.nextVal()).to.deep.equal('b');
    expect(iter.nextVal()).to.deep.equal('c');
    expect(iter.nextVal()).to.deep.equal('a');
  });

  it('calling prev() cycles backward through an array', function () {
    var items = ['a', 'b', 'c'];
    var iter = cycle(items);

    expect(iter.prevVal()).to.deep.equal('c');
    expect(iter.prevVal()).to.deep.equal('b');
    expect(iter.prevVal()).to.deep.equal('a');
    expect(iter.prevVal()).to.deep.equal('c');
  });
});
var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var mergeArrIntoHash = require(ROOT + 'lib/mergeArrIntoHash');

var hash = {
  1: {id: 1, name: 'hello'},
  3: {id: 3, name: 'world'}
};

var items = [
  {id: 1, name: 'hello_again'},
  {id: 2, name: 'two'}
];

describe('mergeArrIntoHash', function() {
  it('merges the items from the hash', function () {
    var result = mergeArrIntoHash(hash, items);
    expect(result).to.deep.equal({
      1: {id: 1, name: 'hello_again'},
      2: {id: 2, name: 'two'},
      3: {id: 3, name: 'world'}
    });
  });
});
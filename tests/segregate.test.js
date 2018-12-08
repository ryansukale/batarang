var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var segregate = require(ROOT + '/segregate');

var items = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 1, name: 'one'},
  {id: 2, name: 'two'}
];

describe.only('segregate', function() {
  describe('segregates based on an array', function() {
    const items = ['a', 'b', 'c', 'd', 'e'];

    it('segregates items into groups', function () {
      const groups = [1, 2, 2];
      var result = segregate(groups, items);
      console.log(result);
      expect(result[0]).to.deep.equal(['a']);
      expect(result[1]).to.deep.equal(['b', 'c']);
      expect(result[2]).to.deep.equal(['d', 'e']);
    });
  });
});

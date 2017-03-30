var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var pluckUniqueValues = require(ROOT + 'lib/pluckUniqueValues');

var items = [
  {id: 1, name: 'one'},
  {id: 2, name: 'two'},
  {id: 1, name: 'one'},
  {id: 2, name: 'two'}
];

describe('pluckUniqueValues', function() {
  it('gets unique values of ids', function () {
    var result = pluckUniqueValues(items);
    expect(result).to.deep.equal([1, 2]);
  });

  it('gets unique values of names', function () {
    var result = pluckUniqueValues(items, 'name');
    expect(result).to.deep.equal(['one', 'two']);
  });
});
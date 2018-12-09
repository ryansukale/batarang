var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var segregateBy = require(ROOT + '/segregateBy');

var items = [];

describe('segregateBy', function() {
  var items = [
    {name: 'a', val: 1},
    {name: 'b', val: 2},
    {name: 'c', val: 3},
    {name: 'd', val: 4}
  ];

  it('segregates an array based on a the value returned by a conditional function', function () {
    function condition(item) { return item.val % 2 === 0 ? 'even' : 'odd'; };
    var result = segregateBy(condition, items);

    expect(result.even).to.deep.equal([{name: 'b', val: 2}, {name: 'd', val: 4}]);
    expect(result.odd).to.deep.equal([{name: 'a', val: 1}, {name: 'c', val: 3}]);
  });
});

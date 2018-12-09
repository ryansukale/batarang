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

  it('segregates an array based on condition defined by a function', function () {
    function condition(item) { return item.val % 2; };
    var result = segregateBy(condition, items);

    expect(result['0']).to.deep.equal([{name: 'b', val: 2}, {name: 'd', val: 4}]);
    expect(result['1']).to.deep.equal([{name: 'a', val: 1}, {name: 'c', val: 3}]);
  });
});

var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var partition = require(ROOT + '/partition');

describe('partition', () => {
  it('partitions an array into smaller sub-arrays based on continuity of key', function () {
    var items = [
      {key: 1},
      {key: 2}, {key: 2},
      {key: 1}, {key: 1},
      {key: 3},
      {key: 2}
    ];

    function predicate(item) { return item.key };

    var result = partition(predicate, items);
    var resultCurried = partition(predicate)(items);

    [result, resultCurried].map(function (res) {
      expect(res[0]).to.deep.equal([{key: 1}]);
      expect(res[1]).to.deep.equal([{key: 2}, {key: 2}]);
      expect(res[2]).to.deep.equal([{key: 1}, {key: 1}]);
      expect(res[3]).to.deep.equal([{key: 3}]);
      expect(res[4]).to.deep.equal([{key: 2}]);
    })
  });
});
var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var toHash = require(ROOT + '/toHash');

describe('toHash', function () {
  it('uses the getKey function to determine the key', function () {
    var arr = [
      {id: 1, val: 11},
      {id: 2, val: 22},
      {id: 3, val: 33}
    ];

    function getKey(item) { return item.val};

    const expectedOutput = {
      11: arr[0],
      22: arr[1],
      33: arr[2]
    };

    // Regular
    expect(toHash(getKey, arr)).to.deep.equal(expectedOutput);

    // Curried
    expect(toHash(getKey)(arr)).to.deep.equal(expectedOutput);
  });
});
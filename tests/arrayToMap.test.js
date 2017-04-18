var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var arrayToMap = require(ROOT + 'lib/arrayToMap');

describe('arrayToMap', function () {
  it('uses the id as the key by default', function () {
    var arr = [
      {id: 1},
      {id: 2},
      {id: 3}
    ];

    expect(arrayToMap(arr)).to.deep.equal({
      1: arr[0],
      2: arr[1],
      3: arr[2]
    });
  });

  it('uses the a specific key if provided', function () {
    var arr = [
      {age: 10, students: []},
      {age: 12, students: []},
      {age: 14, students: []}
    ];

    expect(arrayToMap(arr, 'age')).to.deep.equal({
      10: arr[0],
      12: arr[1],
      14: arr[2]
    });
  });
});
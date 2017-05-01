var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var arrayToMap = require(ROOT + '/arrayToMap');

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

  it('uses a selector function to get the key', function () {
    var arr = [
      {emp_id: 1, manager_id: 11},
      {emp_id: 1, manager_id: 12},
      {emp_id: 2, manager_id: 22}
    ];

    function selector(item) {
      return item.emp_id + '_' + item.manager_id;
    }

    expect(arrayToMap(arr, selector)).to.deep.equal({
      '1_11': arr[0],
      '1_12': arr[1],
      '2_22': arr[2]
    });
  });
});
var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var swapArrayItems = require(ROOT + '/swapArrayItems');

describe('swapArrayItems', function() {
  it('returns a NEW array with items swapped', function () {
  	var arr = [{a: 1}, {b: 2}, {c: 3}, {d: 4}];
  	var arrCopy = arr.slice();
  	var result = swapArrayItems(arr, 1, 3);

    expect(arr).to.deep.equal(arrCopy);
    expect(result).to.deep.equal([
    	{a: 1}, {d: 4} , {c: 3}, {b: 2}
    ]);
  });
});
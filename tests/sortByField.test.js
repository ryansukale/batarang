var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var sortByField = require(ROOT + '/sortByField');

describe('sortByField', function() {
  it('sorts the items in ASC order for the specified field', function () {
  	var items = [
  		{id: 2},
  		{id: 4},
  		{id: 1},
  		{id: 3}
  	];

    expect(sortByField(items, 'id')).to.be.deep.equal([
    	{id: 1},
    	{id: 2},
    	{id: 3},
    	{id: 4}
    ]);
  });

  it('sorts the items in DESC order for the specified field', function () {
  	var items = [
  		{id: 2},
  		{id: 4},
  		{id: 1},
  		{id: 3}
  	];

    expect(sortByField(items, 'id', 'DESC')).to.be.deep.equal([
    	{id: 4},
    	{id: 3},
    	{id: 2},
    	{id: 1}
    ]);
  });

  it('returns undefined if there are no items', function () {
  	expect(sortByField(undefined, 'id', 'DESC')).to.be.undefined;
  });
});
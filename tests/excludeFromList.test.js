var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var excludeFromList = require(ROOT + 'lib/excludeFromList');

describe('excludeFromList', function() {
  it('excludes items from a list based on an id', function () {
  	var list = [
  		{id: 1},
  		{id: 2},
  		{id: 3},
  		{id: 4}
  	];
  	var idsToExclude = [1, 3];

    expect(excludeFromList(list, idsToExclude)).to.deep.equal(
    	[
    		{id: 2},
    		{id: 4}
    	]
    );
  });

  it('excludes items from a list based on custom key', function () {
  	var list = [
  		{field_name: 1},
  		{field_name: 2},
  		{field_name: 3},
  		{field_name: 4}
  	];
  	var itemsToExclude = [1, 3];

    expect(excludeFromList(list, itemsToExclude, 'field_name')).to.deep.equal(
    	[
    		{field_name: 2},
    		{field_name: 4}
    	]
    );
  });
});
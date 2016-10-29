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
  		{custom: 1},
  		{custom: 2},
  		{custom: 3},
  		{custom: 4}
  	];
  	var itemsToExclude = [1, 3];

    expect(excludeFromList(list, itemsToExclude, 'custom')).to.deep.equal(
    	[
    		{custom: 2},
    		{custom: 4}
    	]
    );
  });
});
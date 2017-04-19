var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getCSVWords = require(ROOT + '/getCSVWords');

describe('getCSVWords', function() {
  it('splits a CSV string', function () {
    var result = getCSVWords('hello,world');
    expect(result).to.deep.equal(['hello', 'world']);
  });

  it('splits a CSV string while trimming spaces', function () {
    var result = getCSVWords('hello,   world ');
    expect(result).to.deep.equal(['hello', 'world']);
  });

  it('splits a CSV string and excludes empty values', function () {
    var result = getCSVWords(',  hello,, ,    ,world, ,');
    expect(result).to.deep.equal(['hello', 'world']);
  });
});
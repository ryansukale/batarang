var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getQueryString = require(ROOT + 'lib/getQueryString');

describe('getQueryString', function () {
  it('returns the query string of a URL', function () {
    var url = 'https://www.youtube.com/results?search_query=the+dark+knight';
    expect(getQueryString(url)).to.equal('search_query=the+dark+knight');
  });

  it('returns undefined if no param is passed', function () {
    expect(getQueryString()).to.equal(undefined);
  });
});
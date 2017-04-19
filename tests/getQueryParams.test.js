var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getQueryParams = require(ROOT + '/getQueryParams');

describe('getQueryParams', function() {
  it('gets the value of a query param from a url', function () {
    var url = 'https://www.youtube.com/watch?v=CqlNSVZpbAg';
    expect(getQueryParams(url, 'v')).to.equal('CqlNSVZpbAg');
  });

  it('gets the value of a query param when it has multiple values', function () {
    var url = 'https://www.example.com?name=1&name=2&name=3';
    expect(getQueryParams(url, 'name')).to.deep.equal(['1', '2', '3']);
  });

  it('returns a hash of query params when no key is provided', function () {
    var url = 'https://www.example.com?x=1&x=11&y=2&z=3';
    expect(getQueryParams(url)).to.deep.equal({
      x: ['1', '11'],
      y: '2',
      z: '3'
    });
  });
});
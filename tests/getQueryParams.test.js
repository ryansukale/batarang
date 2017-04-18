var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getQueryParams = require(ROOT + 'lib/getQueryParams');

describe.only('getQueryParams', function() {
  it('gets the value of a query param from a url', function () {
    var url = 'https://www.youtube.com/watch?v=CqlNSVZpbAg';
    expect(getQueryParams('v', url)).to.equal('CqlNSVZpbAg');
  });
});
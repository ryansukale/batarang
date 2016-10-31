var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var capitalizeFirstChar = require(ROOT + 'lib/capitalizeFirstChar');

describe('capitalizeFirstChar', function () {
  it('capitalizes the first character of as string', function () {
    expect(capitalizeFirstChar('exampleString')).to.equal('ExampleString');
  });
});
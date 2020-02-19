var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var percentOf = require(ROOT + '/percentOf');

describe('percentOf', function () {
  it('calculates percent value when all arguments are passed', function () {
    expect(percentOf(25, 20)).to.equal(5);
  });
  
  it('calculates percent you create partial functions', function () {
    var twentyFivePercentOf = percentOf(25);
    expect(twentyFivePercentOf(20)).to.equal(5);
  });
});
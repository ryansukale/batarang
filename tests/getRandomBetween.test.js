var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getRandomBetween = require(ROOT + '/getRandomBetween');

describe('getRandomBetween', function () {
  it('returns a random number between two numbers', function () {
    const val = getRandomBetween(10, 20);
    expect(val >= 10).to.equal(true);
    expect(val <= 20).to.equal(true);
  });
});
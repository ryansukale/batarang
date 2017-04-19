var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var isEnterKey = require(ROOT + '/isEnterKey');

describe('isEnterKey', function() {
  it('returns true if the event keyCode is 13', function () {
  	var event = {keyCode: 13};
    expect(isEnterKey(event)).to.be.true;
  });

  it('return false if the event keyCode is not 13', function () {
  	var event = {keyCode: 14};
    expect(isEnterKey(event)).to.be.false;
  });
});
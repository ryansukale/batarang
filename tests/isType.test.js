var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var isType = require(ROOT + '/isType');

describe('isType', function() {
  it('verifies the type of a string', function () {
    expect(isType('test', 'String')).to.be.true;
    expect(isType(new String(), 'String')).to.be.true;
  });

  it('verifies the type of a number', function () {
    expect(isType(1, 'Number')).to.be.true;
    expect(isType(new Number(), 'Number')).to.be.true;
  });

  it('verifies the type of an object', function () {
    expect(isType({}, 'Object')).to.be.true;
    expect(isType(new Object(), 'Object')).to.be.true;
  });

  it('verifies the type of a function', function () {
    function f() {}
    expect(isType(f, 'Function')).to.be.true;
    expect(isType(new Function(), 'Function')).to.be.true;
  });

  it('verifies the type of a regular expression', function () {
    expect(isType(/abc/g, 'RegExp')).to.be.true;
    expect(isType(new RegExp("meow"), 'RegExp')).to.be.true;
  });
});
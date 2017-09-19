var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var slugify = require(ROOT + '/slugify');

describe('slugify', function() {
  it('converts invalid types to strings', function() {
    expect(slugify(5)).to.equal('5');
    expect(slugify(undefined)).to.equal('');
  });

  it('removes illegal characters', function() {
    expect(slugify('test?ing')).to.equal('testing');
  });

  it('removes consecutive illegal characters', function() {
    expect(slugify('test??ing')).to.equal('testing');
  });

  it('replaces whitespace', function() {
    expect(slugify('test ing')).to.equal('test-ing');
  });
});
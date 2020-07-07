var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var diffMonths = require(ROOT + '/diffMonths');

describe('diffMonths', function () {
  it('return months between dates in the same year', function () {
    var d1 = new Date('2016/03/25');
    var d2 = new Date('2016/05/28');
    expect(diffMonths(d1, d2)).to.equal(2);
    expect(diffMonths(d2, d1)).to.equal(2);
  });

  it('return months between dates in next year when next month is greater', function () {
    var d1 = new Date('2016/03/25');
    var d2 = new Date('2017/09/28');
    expect(diffMonths(d1, d2)).to.equal(18);
    expect(diffMonths(d2, d1)).to.equal(18);
  });

  it('return months between dates in next year when next month is lesser', function () {
    var d1 = new Date('2016/03/25');
    var d2 = new Date('2017/01/28');
    expect(diffMonths(d1, d2)).to.equal(10);
    expect(diffMonths(d2, d1)).to.equal(10);
  });

  it('return months between dates far in the future', function () {
    var d1 = new Date('2015/03/25');
    var d2 = new Date('2020/04/28');
    expect(diffMonths(d1, d2)).to.equal(61);
    expect(diffMonths(d2, d1)).to.equal(61);
  });
});
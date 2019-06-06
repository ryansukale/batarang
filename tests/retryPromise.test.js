var chai = require('chai');
var sinon = require('sinon')
var expect = chai.expect;
var ROOT = '../';

var retryPromise = require(ROOT + 'retryPromise');

function createSpy() {
  var response = {statusCode: 419};
  return sinon.fake.returns(Promise.resolve(response));
}

function validator(d) {
  return d.statusCode !== 419;
}

describe('retryPromise', () => {
  it('retries the function a given number of times if the response is invalid', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      attempts: 3
    };
    var getData = retryPromise(method, options);

    getData().catch(() => {
      expect(method.callCount).to.equal(4);
      done();
    });
  });

  it('passes arguments to retryPromise', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      attempts: 1
    };
    var getData = retryPromise(method, options);

    getData('hello', 'world').catch(() => {
      expect(method.getCall(0).calledWith('hello', 'world')).to.be.true;
      expect(method.getCall(1).calledWith('hello', 'world')).to.be.true;
      done();
    });
  });

  it('passes different arguments upon retryPromise if specified', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      attempts: 1,
      retryArgs: ['Dark', 'Knight']
    };
    var getData = retryPromise(method, options);

    getData('hello', 'world').catch(() => {
      expect(method.getCall(0).calledWith('hello', 'world')).to.be.true;
      expect(method.getCall(1).calledWith('Dark', 'Knight')).to.be.true;
      done();
    });
  });
});

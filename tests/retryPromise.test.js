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

describe.only('retryPromise', () => {
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

  it('passes same arguments to retryPromise by default', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      attempts: 1
    };
    var getData = retryPromise(method, options);

    getData('hello', 'world').catch(() => {
      expect(method.callCount).to.equal(2);
      expect(method.getCall(0).calledWith('hello', 'world')).to.be.true;
      expect(method.getCall(1).calledWith('hello', 'world')).to.be.true;
      done();
    });
  });

  it('passes custom arguments upon retryPromise if specified', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      attempts: 1,
      retryArgs: ['Dark', 'Knight']
    };
    var getData = retryPromise(method, options);

    getData('hello', 'world').catch(() => {
      expect(method.callCount).to.equal(2);
      expect(method.getCall(0).calledWith('hello', 'world')).to.be.true;
      expect(method.getCall(1).calledWith('Dark', 'Knight')).to.be.true;
      done();
    });
  });

  it('retries on error', (done) => {
    var method = sinon
      .fake
      .returns(Promise.reject('failed'));

    var options = {
      validator: validator,
      attempts: 2,
      retryArgs: ['Dark', 'Knight']
    };
    var getData = retryPromise(method, options);

    getData('hello', 'world').catch(() => {
      expect(method.callCount).to.equal(3);
      expect(method.getCall(0).calledWith('hello', 'world')).to.be.true;
      expect(method.getCall(1).calledWith('Dark', 'Knight')).to.be.true;
      expect(method.getCall(2).calledWith('Dark', 'Knight')).to.be.true;
      done();
    });
  });
});

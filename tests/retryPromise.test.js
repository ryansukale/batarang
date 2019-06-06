var chai = require('chai');
var sinon = require('sinon')
var expect = chai.expect;
var ROOT = '../';

var retryPromise = require(ROOT + 'retryPromise');

function createSpy() {
  var response = {statusCode: 666};
  return sinon.fake.returns(Promise.resolve(response));
}

function validator(d) {
  return d.statusCode !== 666;
}

describe('retryPromise', () => {
  it('does not retry a function on success', (done) => {
    var method = sinon
      .fake
      .returns(Promise.resolve(1));

    var getData = retryPromise(method);

    getData().then(() => {
      expect(method.callCount).to.equal(1);
      done();
    });
  });

  it('retries a function once on failure', (done) => {
    var method = sinon
      .fake
      .returns(Promise.reject('failed'));

    var getData = retryPromise(method);

    getData().catch(() => {
      expect(method.callCount).to.equal(2);
      done();
    });
  });

  it('retries a few times on failure if specified', (done) => {
    var method = sinon
      .fake
      .returns(Promise.reject('failed'));

    var options = {
      validator: validator,
      retries: 2,
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

  it('retries the function a few times based on custom validator', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      retries: 3
    };
    var getData = retryPromise(method, options);

    getData().catch(() => {
      expect(method.callCount).to.equal(4);
      done();
    });
  });

  it('passes same arguments to retries by default', (done) => {
    var method = createSpy();
    var options = {
      validator: validator
    };
    var getData = retryPromise(method, options);

    getData('hello', 'world').catch(() => {
      expect(method.callCount).to.equal(2);
      expect(method.getCall(0).calledWith('hello', 'world')).to.be.true;
      expect(method.getCall(1).calledWith('hello', 'world')).to.be.true;
      done();
    });
  });

  it('passes custom arguments to retries if specified', (done) => {
    var method = createSpy();
    var options = {
      validator: validator,
      retries: 1,
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
});

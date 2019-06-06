var chai = require('chai');
var sinon = require('sinon')
var expect = chai.expect;
var ROOT = '../';

var retryPromise = require(ROOT + 'retryPromise');

function createSpy() {
  var response = {statusCode: 419};
  return sinon.fake.returns(Promise.resolve(response));
}

describe('retryPromise', () => {
  it('retries the function a given number of times if the response is invalid', (done) => {
    function validator(d) {
      return d.statusCode !== 419;
    }
    var method = createSpy();
    var options = {
      validator: validator,
      attempts: 3
    };
    var getData = retryPromise(method, options);

    getData().catch(() => {
      console.log('here')
      expect(method.callCount).to.equal(4);
      done();
    });
  });

  // it('passes arguments upon retryPromise', (done) => {
  //   var method = createSpy();
  //   var getData = retryPromise(method, (d) => d.statusCode !== 419, 1);

  //   getData('hello').catch(() => {
  //     expect(method.calls.argsFor(0)).toEqual(['hello']);
  //     expect(method.calls.argsFor(1)).toEqual(['hello']);
  //     done();
  //   });
  // });

  // it('passes different arguments upon retryPromise if specified', (done) => {
  //   var method = createSpy();
  //   var getData = retryPromise(method, (d) => d.statusCode !== 419, 1, 'world');

  //   getData('hello').catch(() => {
  //     expect(method.calls.argsFor(0)).toEqual(['hello']);
  //     expect(method.calls.argsFor(1)).toEqual(['world']);
  //     done();
  //   });
  // });
});

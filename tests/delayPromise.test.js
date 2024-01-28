var chai = require("chai");
var sinon = require("sinon");
var expect = chai.expect;
var ROOT = "../";

var delayPromise = require(ROOT + "/delayPromise");

describe("delayPromise", function () {
  this.beforeEach(function () {
    this.clock = sinon.useFakeTimers();
  });

  this.afterEach(function () {
    this.clock.restore();
  });

  it("resolves the promise after a delay", function (done) {
    var isCalled = false;
    delayPromise(500).then(function (arg) {
      isCalled = true;
      expect(arg).to.equal(undefined);
      done();
    });

    // Initially isCalled is false
    expect(isCalled).to.equal(false);
    this.clock.tick(510);
  });

  it("resolves the promise after a delay and returns the specified value after a delay", function (done) {
    var isCalled = false;
    var value = "someValue";
    delayPromise(500, value).then(function (arg) {
      isCalled = true;
      expect(arg).to.equal(value);
      done();
    });

    // Initially isCalled is false
    expect(isCalled).to.equal(false);
    this.clock.tick(510);
  });
});

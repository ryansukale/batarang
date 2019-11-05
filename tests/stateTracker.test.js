var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var stateTracker = require(ROOT + '/stateTracker');

describe('stateTracker', function() {
  it('creates a stateTracker with a default initial state', function () {
    const possibleStates = ['init', 'loading', 'loadingMore', 'failure'];
    const state = stateTracker(possibleStates);

    expect(state.init).to.equal(true);
  });

  it('creates a stateTracker with a custom initial state', function () {
    const possibleStates = ['init', 'loading', 'loadingMore', 'failure'];
    const state = stateTracker(possibleStates, 'loading');

    expect(state.loading).to.equal(true);
  });

  it('updates the state', function () {
    const possibleStates = ['init', 'loading', 'loadingMore', 'failure'];
    const state = stateTracker(possibleStates);

    state.update('loading');

    expect(state.init).to.equal(false);
    expect(state.loading).to.equal(true);
  });
});
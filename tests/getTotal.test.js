var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var getTotal = require(ROOT + '/getTotal');

describe('getTotal', function () {
  var items = [
    {wins: 1, games: 4},
    {wins: 2, games: 2},
    {wins: 3, games: 5}
  ];

  it('calculates sum when all arguments are passed', function () {
    expect(getTotal('wins', items)).to.equal(6);
  });

  it('calculates sum when you create partial functions', function () {
    var getTotalWins = getTotal('wins');
    var getTotalGames = getTotal('games');

    expect(getTotalWins(items)).to.equal(6);
    expect(getTotalGames(items)).to.equal(11);
  });
});
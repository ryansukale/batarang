var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var createUrl = require(ROOT + 'createUrl');

describe('#createUrl', function () {
  const params = {id: 1, team_id: 2};
  const query = {page: 1, sort: 'name'};
  const urlPattern = 'https://api.com/users/:id/teams/:team_id';

  it('sets the path params only', function () {
    expect(createUrl(urlPattern, {params})).to.deep.equal(
      'https://api.com/users/1/teams/2'
    );
  });

  it('sets the query params only', function () {
    expect(createUrl(urlPattern, {query})).to.deep.equal(
      'https://api.com/users/:id/teams/:team_id?page=1&sort=name'
    );
  });

  it('sets the path and query params', function () {
    expect(createUrl(urlPattern, {params, query})).to.deep.equal(
      'https://api.com/users/1/teams/2?page=1&sort=name'
    );
  });
});

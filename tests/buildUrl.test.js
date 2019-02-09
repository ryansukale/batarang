var chai = require('chai');
var expect = chai.expect;
var ROOT = '../';

var buildUrl = require(ROOT + 'buildUrl');

describe('buildUrl', function () {
  const path = {id: 1, team_id: 2};
  const query = {page: 1, sort: 'name'};
  const basePath = 'https://api.com/users/{id}/teams/{team_id}';

  it('sets the path params', function () {
    expect(buildUrl(basePath, {path})).to.deep.equal(
      'https://api.com/users/1/teams/2'
    );
  });

  it('sets the query params', function () {
    expect(buildUrl(basePath, {query})).to.deep.equal(
      'https://api.com/users/{id}/teams/{team_id}?page=1&sort=name'
    );
  });

  it('sets the path and query params', function () {
    expect(buildUrl(basePath, {path, query})).to.deep.equal(
      'https://api.com/users/1/teams/2?page=1&sort=name'
    );
  });
});
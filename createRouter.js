var pathToRegexp = require('path-to-regexp');
var isEmpty = require('lodash/isEmpty');
var createUrl = require('./createUrl');

function createRouter(routes) {
  function get(name, options) {
    var path = routes[name];

    if (!path) {
      throw new Error('No route found for the name "' + name + '"');
    }

    return isEmpty(options) ? path : createUrl(path, options);
  }

  return {
    get: get
  };
}

module.exports = createRouter;

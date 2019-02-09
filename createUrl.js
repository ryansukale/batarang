var pathToRegexp = require('path-to-regexp');
var isEmpty = require('lodash/isEmpty');
var queryString = require('query-string');
var lookup = {};

function createUrl(urlPattern, options) {
  var base;
  var params = options.params;
  var query = options.query;

  if (!isEmpty(params)) {
    lookup[urlPattern] = lookup[urlPattern] || pathToRegexp.compile(urlPattern);
    base = lookup[urlPattern](params);
  } else {
    base = urlPattern;
  }

  if (isEmpty(query)) {
    return base;
  }

  return base + '?' + queryString.stringify(query);
}

module.exports = createUrl;

var pathToRegexp = require('path-to-regexp');
var isEmpty = require('lodash/isEmpty');
var queryString = require('query-string');
var lookup = {};

function createUrl(urlPattern, {params, query}) {
  var base;
  if (!isEmpty(params)) {
    var compiledUrlPattern = lookup[urlPattern] || pathToRegexp.compile(urlPattern);
    base = compiledUrlPattern(params);
  } else {
    base = urlPattern;
  }

  if (isEmpty(query)) {
    return base;
  }

  return base + '?' + queryString.stringify(query);
}

module.exports = createUrl;

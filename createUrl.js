var pathToRegexp = require('path-to-regexp');
var isEmpty = require('lodash/isEmpty');
var queryString = require('query-string');
var lookup = {};

function createUrl(urlPattern, options, config) {
  var base;
  var params = options.params;
  var query = options.query;
  config = config || {};

  if (!isEmpty(params)) {
    lookup[urlPattern] = lookup[urlPattern] || pathToRegexp.compile(urlPattern);
    console.log(config.params);
    base = lookup[urlPattern](params, config.params);
  } else {
    base = urlPattern;
  }

  if (isEmpty(query)) {
    return base;
  }

  return base + '?' + queryString.stringify(query, config.query);
}

module.exports = createUrl;

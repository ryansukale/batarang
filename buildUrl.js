var strformat = require('strformat');
var querystring = require('query-string');

function buildUrl(template, options = {}) {
  const {path, query} = options;
  const baseUrl = strformat(template, path);
  if (!query) {
    return baseUrl;
  }
  
  return `${baseUrl}?${querystring.stringify(query)}`
}

module.exports = buildUrl;
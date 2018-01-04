var getQueryString = require('./getQueryString');

/**
 * Gets the query params from the browser URL
 * getQueryParams() returns a query object
 * getQueryParams(key) returns the value of the key in the query
 * @param  {string} key [optional]
 * @return {[type]}     [description]
 */
function getQueryParams(url, key) {
  var qd = {};
  var value;
  var source = url ? getQueryString(url) : location.search;
  if (!source) {
      return;
  }
  // Based on http://stackoverflow.com/a/21152762/226953
  source.split("&").forEach(
    function(item) {
      var s = item.split("="),
      k = s[0],
      v = s[1] && decodeURIComponent(s[1]);

      (k in qd) ? qd[k].push(v) : qd[k] = [v]
    }
  );

  if (key) {
    value = qd[key];
    if (!value) {
      return;
    }

    if (value.length === 1) {
      return value[0];
    }
    
    return value;
  }

  Object.keys(qd).forEach(function (key) {
    let value = qd[key];
    if (value && value.length === 1) {
        qd[key] = value[0];
    }
  });
  return qd;
}

module.exports = getQueryParams;
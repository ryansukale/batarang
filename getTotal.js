var sum = require('@ramda/sum');
var curry = require('@ramda/curry');

var getTotal = curry(function (attr, arr) {
  var values = arr.map(function(d) {
    return d[attr];
  });

  return sum(values);
});


module.exports = getTotal;
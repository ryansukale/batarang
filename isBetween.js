var curry = require('@ramda/curry');

var isBetween = curry(function(options, val) {
  return val >= options.min && val <= options.max;
})

module.exports = isBetween;
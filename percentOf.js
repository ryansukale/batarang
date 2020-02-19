var curry = require('@ramda/curry');

var percentOf = curry(
  function (percent, total) {
    return (percent/100) * total;
  }
);

module.exports = percentOf;
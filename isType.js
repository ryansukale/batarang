// http://bonsaiden.github.io/JavaScript-Garden/#the-class-of-an-object
function isType(obj, type) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj !== undefined && obj !== null && clas === type;
}

module.exports = isType;
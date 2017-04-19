// http://stackoverflow.com/a/32686261
var REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmail(str) {
	return str && REGEX.test(str);
}

module.exports = isEmail;
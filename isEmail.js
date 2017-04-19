// http://stackoverflow.com/a/32686261
var REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Work in progress
function isEmail(str) {
	return str ? REGEX.test(str) : false;
}

module.exports = isEmail;
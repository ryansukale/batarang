module.exports = {
	// Arrays
	excludeFromList: require('./lib/excludeFromList'),
	sortByField: require('./lib/sortByField'),
	arrayToMap: require('./lib/arrayToMap'),

	// Browser
	injectScript: require('./lib/injectScript'),
	loadExternalScripts: require('./lib/loadExternalScripts'),
	reloadPage: require('./lib/reloadPage'),

	// Boolean Checks
	isEmail: require('./lib/isEmail'),
	isEnterKey: require('./lib/isEnterKey'),

	// Misc
	getCSVWords: require('./lib/getCSVWords'),
	getHostNameFromUrl: require('./lib/getHostNameFromUrl'),
	getQueryParams: require('./lib/getQueryParams'),
	getQueryString: require('./lib/getQueryString'),
	getYoutubeVideoId: require('./lib/getYoutubeVideoId'),
	bindOnInstance: require('./lib/bindOnInstance'),
	capitalizeFirstChar: require('./lib/capitalizeFirstChar')
};
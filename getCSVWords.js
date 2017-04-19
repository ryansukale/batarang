/**
 * http://stackoverflow.com/a/23728809/226953
 * Splits a string containing comma and spaces
 * even if they occur consecutively
 * 
 * @param  {string} str String to split
 * @return {array}     Array of words
 */
function getCSVWords(str) {
	return !str ? [] : str.split(',').map(function (item) {
        return item.trim();
    }).filter(Boolean);
}

module.exports = getCSVWords;
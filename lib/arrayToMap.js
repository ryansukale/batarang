// Converts an array of objects into a keyed object
function arrayToMap(arr, key) {
	key = key || 'id';

    if (!arr) {
        return {};
    }
    return arr.reduce(
        function (accumulator, current) {
            accumulator[current[key]] = current;
            return accumulator;
        },
        {}
    );
}

module.exports = arrayToMap;
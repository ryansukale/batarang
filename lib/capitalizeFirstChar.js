// http://stackoverflow.com/a/1026087
function capitalizeFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalizeFirstChar;
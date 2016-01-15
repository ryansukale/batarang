function getQueryString(url) {
    if(!url) {
        return '';
    }
    var pos = url.indexOf('?');
    return pos && url.substring(pos);
}

module.exports = getQueryString;
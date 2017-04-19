function getQueryString(url) {
    if(!url) return;
    var pos = url.indexOf('?');
    return pos === -1 ? undefined : url.substring(pos + 1);
}

module.exports = getQueryString;
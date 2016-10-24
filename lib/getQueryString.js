function getQueryString(url) {
    if(!url) return;
    var pos = url.indexOf('?');
    return pos === -1 ? undefined : url.substring(pos);
}

module.exports = getQueryString;
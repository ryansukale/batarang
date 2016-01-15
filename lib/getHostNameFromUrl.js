/**
 * This function can only be called from a client
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
function getHostNameFromUrl(url) {
    if(document) {
        // http://stackoverflow.com/a/19801744/226953
        var a = document.createElement("a");
        a.href = url;

        // Handle chrome which will default to domain where script is called from if invalid
        return url.indexOf(a.hostname) != -1 ? a.hostname : '';
    }
}

module.exports = getHostNameFromUrl;
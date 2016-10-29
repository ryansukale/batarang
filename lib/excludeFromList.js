function excludeFromList(list, keys, property) {
    property = property || 'id'
    return list.filter(function (item) {
        return keys.indexOf(item[property]) === -1;
    });
}

module.exports = excludeFromList;
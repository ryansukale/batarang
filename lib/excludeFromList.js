function excludeFromList(list, keys, property) {
    property = property || 'id'
    return list.filter(item => {
        return keys.indexOf(item[property]) === -1;
    });
}

module.exports = excludeFromList;
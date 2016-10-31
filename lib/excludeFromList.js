function excludeFromList(list, values, key) {
    key = key || 'id';
    return list.filter(function (item) {
        return values.indexOf(item[key]) === -1;
    });
}

module.exports = excludeFromList;
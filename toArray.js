function toArray(item) {
  return item ? (Array.isArray(item) ? item : [item]) : [];
}

module.exports = toArray;
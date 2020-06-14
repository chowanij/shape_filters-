function inOperator(item, value) {
  return item > value[0] && item < value[1];
}

module.exports = inOperator;
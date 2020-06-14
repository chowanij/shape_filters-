function rectangleArea(rectangle) {
  const a = rectangle.width;
  const b = rectangle.height;

  if ( !a || !b || a <= 0 || b <= 0) {
    return 0;
  }

  return a * b;
}

module.exports = rectangleArea;
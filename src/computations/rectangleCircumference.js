function rectangleCircumference(rectangle) {
    const a = rectangle.width;
    const b = rectangle.height;
  
    if ( !a || !b || a <= 0 || b <= 0) {
      return 0;
    }
  
    return 2*a + 2*b;
  }
  
  module.exports = rectangleCircumference;
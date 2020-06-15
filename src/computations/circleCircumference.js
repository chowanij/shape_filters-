function circleCircumference(circle) {
    const radius = circle.radius;
    if(!radius || radius <= 0 ) {
      return 0
    }
    return (2 * radius * Math.PI);
  }
  
  module.exports = circleCircumference;
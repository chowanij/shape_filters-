function circleArea(circle) {
  const radius = circle.radius;
  if(!radius || radius <= 0 ) {
    return 0
  }
  return (radius * radius * Math.PI);
}

module.exports = circleArea;
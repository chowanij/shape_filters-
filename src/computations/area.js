const { SQUARE, CIRCLE, RECTANGLE } = require('./consts');
const circleArea = require('./cicrcleArea');
const sqareArea = require('./sqareArea');
const rectangleArea = require('./rectangleArea');

function computeArea(shape) {
  const type = shape.type;

  switch(type) {
    case SQUARE : 
      return sqareArea(shape);
    case CIRCLE : 
      return circleArea(shape);
    case RECTANGLE: 
      return rectangleArea(shape);
  }
}
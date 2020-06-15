const { SQUARE, CIRCLE, RECTANGLE } = require('./consts');
const circleCircumference = require('./circleCircumference');
const sqareCircumferrence= require('./sqareCircumference');
const rectangleCircumference = require('./rectangleCircumference');

function computeCircumference(shape) {
  const type = shape.type;

  switch(type) {
    case SQUARE : 
      return sqareCircumferrence(shape);
    case CIRCLE : 
      return circleCircumference(shape);
    case RECTANGLE: 
      return rectangleCircumference(shape);
  }
}


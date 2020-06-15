const circumference = require('../computations/circumference');
const area = require('../computations/area');
const eqOperator = require('./eqOperator');
const gtOperator = require('./gtOperator');
const inOperator = require('./inOperator');
const ltOperator = require('./ltOperator');
const negOpertor = require('./negOperator');

function computeValue(shape, operation) {
	const property = operation.property
	if(property === 'area') {
		return  area(shape);
	}
	if(property === 'circumference') {
		return circumference(shape);
	}

	return 0;
}

function getOperator(operation) {
	const operator = operation.operator;

	switch(operator) {
		case 'lt': 
			return ltOperator;
		case 'gt' : 
			return gtOperator;
		case 'eq':
			return eqOperator;
		case 'in':
			return inOperator;
		case 'neg':
			return negOpertor;
		default: 
			return function() {
				return true;
			}
	}
}

function shapeFilter(shapes, operation) {

	return shapes.filter( (shape) => {
		const item = computeValue(shape, operation);
		const value = operation.value;
		const filterFn =  getOperator(operation);

		return filterFn(item, value);
	})
}

module.exports = shapeFilter;

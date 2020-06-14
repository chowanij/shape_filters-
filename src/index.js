/**
 * @param {object[]} shapes - array of shapes to process
 * @param {object[]} operations - array of operations to apply
 * @returns {object[]} processed shapes
 */
function process(shapes, operations) { }

/**
 * @param {string} property - name of the property that will be used for filter operation
 * @param {FilterFunction} fn - function that will execute filter agains passed shape and return true or false
 */
function addFilter(property, fn) { }

/**
 * @typedef {function} FilterFunction
 * @param {object} shape - object with shape data (the same format as in shapes.json file)
 * @param {object} operation - object with operation data (the same format as in operations.json file)
 * @return {boolean} - true when shape matches the filter configuration, false when it doesn't match
 *
 * example filter that accepts only shapes with width of 10:
 * function exampleFilter(shape, operation) {
 *   return shape.width === 10;
 * }
 */


module.exports = {
  process,
  addFilter
};

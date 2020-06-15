const shapes = require('../shapes.json');
const filters = require('./filters.json');

const shapeFilter = require('../../filters/shapeFilter');

describe('shapeFilter', () => {
  it('should filter shapes by lt operator', () => {
    const filter = filters[0];
    const results = shapeFilter(shapes, filter);

    expect(results).toEqual([
      {
        id: 1,
        type: 'rectangle',
        width: 20,
        height: 8,
        x: 10,
        y: 10,
        color: 'red'
      },
      { id: 6, type: 'circle', radius: 8, x: 20, y: 70, color: 'green' },
      { id: 8, type: 'circle', radius: 5, x: 30, y: 30, color: 'red' },
      { id: 9, type: 'square', width: 8, x: 30, y: 30, color: 'blue' },
      { id: 10, type: 'square', width: 12, x: 10, y: 20, color: 'green' },
      { id: 11, type: 'square', width: 8, x: 50, y: 20, color: 'yellow' }
    ]);
  })

  it('should filter shapes by in operator', () => {
    const filter = filters[1];
    const results = shapeFilter(shapes, filter);
    
    expect(results).toEqual([
      {
        id: 4,
        type: 'rectangle',
        width: 24,
        height: 20,
        x: 40,
        y: 60,
        color: 'blue'
      },
      { id: 5, type: 'circle', radius: 10, x: 30, y: 30, color: 'blue' },
      { id: 7, type: 'circle', radius: 12, x: 30, y: 30, color: 'yellow' }
    ]);
  })

});


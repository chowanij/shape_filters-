const circleArea = require('../../computations/cicrcleArea') 

describe("circleArea", () => {

  it("should compute circle area", () => {
    const smallCircle = {
      radius: 1
    }
    const bigCircle = {
      radius: 4
    }
    const area = circleArea(smallCircle);
    const bigArea = circleArea(bigCircle);

    expect(area).toBeGreaterThanOrEqual(3.14)
    expect(bigArea).toBeGreaterThanOrEqual(12.4)
  })

  it("should return 0 for non valid object", () => {
    const circle = {
    }
    const area = circleArea(circle);

    expect(area).toBe(0)
  })

  it("should return 0 for non valid radious", () => {
    const circle = {
    }
    const area = circleArea(circle);

    expect(area).toBe(0)
  })
})
test('Test randomBool', () => {
    const randomBool = require('../randomBool');

    // Test the function multiple times to check for randomness
    const results = Array.from({ length: 1000 }, () => randomBool());

    // Check that the results are approximately 50% true and 50% false
    const trueCount = results.filter(result => result).length;
    const falseCount = results.length - trueCount;

    expect(trueCount).toBeGreaterThan(400);
    expect(trueCount).toBeLessThan(600);
    expect(falseCount).toBeGreaterThan(400);
    expect(falseCount).toBeLessThan(600);
});
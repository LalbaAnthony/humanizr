test('Test randomInt', () => {
    const randomInt = require('../randomInt');

    // Test the function multiple times to check for randomness
    const results = Array.from({ length: 1000 }, () => randomInt(0, 100));

    // Check that the results are within the expected range
    results.forEach(result => {
        expect(result).toBeGreaterThanOrEqual(0);
        expect(result).toBeLessThanOrEqual(100);
    });

    // Check that the results are integers
    results.forEach(result => {
        expect(Number.isInteger(result)).toBe(true);
    });
});
test('Test levenshtein', () => {
    const levenshtein = require('../levenshtein');

    expect(levenshtein('kitten', 'sitting')).toBe(3);
    expect(levenshtein('flaw', 'lawn')).toBe(2);
    expect(levenshtein('intention', 'execution')).toBe(5);
    expect(levenshtein('abc', 'abc')).toBe(0);
    expect(levenshtein('abc', 'ab')).toBe(1);
    expect(levenshtein('abc', '')).toBe(3);
    expect(levenshtein('', 'abc')).toBe(3);
});
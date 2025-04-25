const { make, defaultOptions } = require('../spellings');

describe('make()', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return the same text if text is empty', () => {
        expect(make('')).toBe('');
    });
});

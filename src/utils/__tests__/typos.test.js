const { make, defaultOptions } = require('../../utils/typos');
const keyboardMaps = require('../../data/keyboardMaps.json');

jest.mock('../../helpers/randomBool', () => jest.fn());
jest.mock('../../helpers/randomInt', () => jest.fn());
jest.mock('../../helpers/randomLetter', () => jest.fn());

const randomBool = require('../../helpers/randomBool');
const randomInt = require('../../helpers/randomInt');
const randomLetter = require('../../helpers/randomLetter');

describe('make()', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return the same text if text is empty', () => {
        expect(make('')).toBe('');
    }); 
});

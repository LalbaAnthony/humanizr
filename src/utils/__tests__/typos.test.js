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

    // ERRORS RELATED

    it('should throw if text is not a string', () => {
        expect(() => make(null)).toThrow('Text must be a string');
        expect(() => make(123)).toThrow('Text must be a string');
    });

    it('should throw if percentage is out of range', () => {
        expect(() => make('hello', { percentage: -0.1 })).toThrow('Percentage must be between 0 and 1');
        expect(() => make('hello', { percentage: 1.5 })).toThrow('Percentage must be between 0 and 1');
    });

    it('should throw if types is not an array', () => {
        expect(() => make('hello', { types: 'swap' })).toThrow('Types must be an array');
    });

    it('should throw if types is an empty array', () => {
        expect(() => make('hello', { types: [] })).toThrow('Types array must not be empty');
    });

    it('should throw if keyboard is not a string', () => {
        expect(() => make('hello', { keyboard: 123 })).toThrow('Keyboard must be a string');
    });

    // CORE FUNCTIONALITY
    
    it('should apply random typo with "random" type', () => {
        randomBool.mockReturnValue(true);
        randomInt.mockReturnValue(0);
        randomLetter.mockReturnValue('x');

        const result = make('abc', { types: ['random'] });
        expect(result).toContain('x');
    });

    it('should swap letters with "swap" type', () => {
        randomBool.mockReturnValue(true);
        randomInt.mockReturnValue(0);

        const result = make('ab', { types: ['swap'] });
        expect(result).toBe('ba');
    });

    it('should map letter using keyboard map', () => {
        const mockMap = keyboardMaps['azerty'];
        const letter = Object.keys(mockMap).find(l => mockMap[l].length > 0);
        const mappedTo = mockMap[letter][0];

        randomBool.mockReturnValue(true);
        randomInt.mockReturnValue(0);

        const result = make(letter, { types: ['map'], keyboard: 'azerty' });
        expect(result).toBe(mappedTo);
    });

    it('should leave letter unchanged if keyboard mapping not found', () => {
        randomBool.mockReturnValue(true);
        randomInt.mockReturnValue(0);

        const result = make('#', { types: ['map'], keyboard: 'azerty' });
        expect(result).toBe('#');
    });

    it('should warn and skip unknown type', () => {
        const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => { });

        randomBool.mockReturnValue(true);
        randomInt.mockReturnValue(0);

        const result = make('a', { types: ['unknown'] });
        expect(result).toBe('a');
        expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('Type "unknown" not found'));
        warnSpy.mockRestore();
    });

    it('should apply typo based on percentage', () => {
        randomBool.mockImplementation((p) => p >= 1); // always false
        const result = make('abcdef', { percentage: 0 });
        expect(result).toBe('abcdef');
    });
});

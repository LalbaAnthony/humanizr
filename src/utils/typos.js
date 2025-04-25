// src/utils/typos.js

// TODO: make options.types an object and bind percentage on each type

const randomBool = require('../helpers/randomBool');
const randomLetter = require('../helpers/randomLetter');
const randomInt = require('../helpers/randomInt');
const keyboardMaps = require('../data/keyboardMaps.json');

const defaultOptions = {
    percentage: 0.05, // percentage of letters to be replaced
    types: ['swap', 'map'], // random, swap or map
    keyboard: 'azerty', // keyboard layout to use
};

function make(text = '', options = {}) {
    if (typeof text !== 'string') throw new Error('Text must be a string');
    if (text.length === 0) return text;

    const percentage = options.percentage || defaultOptions.percentage; // percentage of letters to be replaced
    if (percentage < 0 || percentage > 1) throw new Error('Percentage must be between 0 and 1');

    const types = options.types || defaultOptions.types; // random, swap or map
    if (!Array.isArray(types)) throw new Error('Types must be an array');
    if (types.length === 0) throw new Error('Types array must not be empty');

    const keyboard = options.keyboard || defaultOptions.keyboard; // keyboard layout to use
    if (typeof keyboard !== 'string') throw new Error('Keyboard must be a string');
    if (keyboard.length === 0) throw new Error('Keyboard must not be empty');
    if (!keyboardMaps[keyboard]) throw new Error(`Keyboard layout "${keyboard}" not found.`);

    let replaced = 0;
    const letters = text.split('');
    const length = letters.length;

    for (let i = 0; i < length; i++) {
        if (randomBool(percentage)) {
            replaced++;

            // Pick a random type of typo to apply
            const type = types[randomInt(0, types.length - 1)];

            // Replace with totally random letter
            if (type === 'random') {
                letters[i] = randomLetter();
            }
            // Swap with the next letter
            else if (type === 'swap') {
                if (i < length - 1) {
                    const temp = letters[i];
                    letters[i] = letters[i + 1];
                    letters[i + 1] = temp;
                }
            }
            // Will replace with a letter from the keyboard map
            else if (type === 'map') {
                const keyboardMap = keyboardMaps[keyboard];
                const letterToFind = letters[i].toLowerCase();

                if (!keyboardMap) {
                    console.warn(`Keyboard layout "${keyboard}" not found.`);
                    continue;
                }
                if (!keyboardMap[letterToFind]) {
                    continue;
                }

                letters[i] = keyboardMap[letterToFind][randomInt(0, keyboardMap[letterToFind].length - 1)];
            } else {
                console.warn(`Type "${type}" not found. Available types are: random, swap, map.`);
                continue;
            }
        }
    }

    text = letters.join('')

    return text
}

module.exports = { defaultOptions, make };
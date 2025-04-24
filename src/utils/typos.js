// src/utils/typos.js

// TODO: bind percentage on each type of typo

const randomBool = require('../helpers/randomBool');
const randomLetter = require('../helpers/randomLetter');
const randomInt = require('../helpers/randomInt');
const keyboardMaps = require('../data/keyboardMaps.json');

function replace(text, options = {}) {
    const percentage = options.percentage || 0.05; // percentage of letters to be replaced
    const types = options.types || ['swap', 'map']; // random, swap or map
    const keyboard = options.keyboard || 'azerty'; // keyboard layout to use

    let replaced = 0;
    const letters = text.split('');
    const length = letters.length;

    for (let i = 0; i < length; i++) {
        if (randomBool(percentage)) {
            replaced++;

            // Pick a random type of typo to apply
            const type = types[Math.floor(Math.random() * types.length)];

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

module.exports = { replace };
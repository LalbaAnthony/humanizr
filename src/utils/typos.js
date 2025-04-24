// src/utils/typos.js

const randomBool = require('../helpers/randomBool');
const randomLetter = require('../helpers/randomLetter');

function replace(text, options = {}) {
    const percentage = options.percentage || 0.01; // percentage of letters to be replaced
    const types = options.types || ['random']; // random, swap, map
    const keyboard = options.keyboard || 'qwerty'; // keyboard layout to use

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
            if (type === 'swap') {
                if (i < length - 1) {
                    const temp = letters[i];
                    letters[i] = letters[i + 1];
                    letters[i + 1] = temp;
                }
            }

            // Will replace with a letter from the keyboard map
            if (type === 'map') {
                console.log('should use map here')
            }
        }
    }

    text = letters.join('')

    return text
}

module.exports = { replace };
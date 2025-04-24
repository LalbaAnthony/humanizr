// src/helpers/randomInt.js

/**
 * Generate a random integer between min and max, inclusive.
 */
function randomInt(min = 0, max = 1) {
    if (min > max) throw new Error('Min must be less than max');
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = randomInt;
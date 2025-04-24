// src/helpers/randomLetter.js

/**
 *  
 * Returns a random letter from a-z.
 */
function randomLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

module.exports = randomLetter;
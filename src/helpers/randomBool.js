// src/helpers/randomBool.js

/**
 * Have a percentage chance of returning true or false.
 */
function randomBool(percentage = 0.5) {
    return Math.random() < percentage;
}

module.exports = randomBool;
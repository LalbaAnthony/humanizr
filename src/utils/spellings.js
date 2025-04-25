// src/utils/spellings.js

const defaultOptions = {
    // ... add default options here
};

function make(text = '', options = {}) {
    if (typeof text !== 'string') throw new Error('Text must be a string');
    if (text.length === 0) return text;

    // TODO

    return text
}

module.exports = { defaultOptions, make };
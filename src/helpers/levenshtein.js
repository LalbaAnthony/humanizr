// src/helpers/levenshtein.js

/**
 * The Levenshtein distance is a measure of the similarity between two strings.
 * 
 * Returns the Levenshtein distance between two strings.
 */
function levenshtein(a, b) {
    if (typeof a !== 'string') throw new Error('The first argument must be a string');
    if (typeof b !== 'string') throw new Error('The second argument must be a string');

    const aLength = a?.length || 0;
    const bLength = b?.length || 0;
    
    if (!a || aLength === 0) return bLength;
    if (!b || bLength === 0) return aLength;
    
    a = a.toLowerCase().trim();
    b = b.toLowerCase().trim();

    if (a === b) return 0;

    // If one string is a substring of the other, return the difference in length
    if (b.includes(a)) return bLength - aLength;
    if (a.includes(b)) return aLength - bLength;

    // Place the shorter string first
    if (aLength > bLength) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    const tmp = [];

    for (let i = 0; i <= aLength; i++) {
        tmp[i] = [i];
    }
    for (let j = 0; j <= bLength; j++) {
        tmp[0][j] = j;
    }
    for (let i = 1; i <= aLength; i++) {
        for (let j = 1; j <= bLength; j++) {
            tmp[i][j] = Math.min(
                tmp[i - 1][j] + 1,
                tmp[i][j - 1] + 1,
                tmp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0)
            );
        }
    }

    return tmp[aLength][bLength];
}

module.exports = levenshtein;
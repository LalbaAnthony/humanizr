// src/helpers/levenshtein.js

/**
 * The Levenshtein distance is a measure of the similarity between two strings.
 * 
 * Returns the Levenshtein distance between two strings.
 */
function levenshtein(a, b) {
    //  TODO: Improve using https://www.php.net/manual/en/function.levenshtein.php#85387
    if (a === b) return 0;

    a = a.toLowerCase().trim();
    b = b.toLowerCase().trim();

    const tmp = [];

    for (let i = 0; i <= a.length; i++) {
        tmp[i] = [i];
    }
    for (let j = 0; j <= b.length; j++) {
        tmp[0][j] = j;
    }
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            tmp[i][j] = Math.min(
                tmp[i - 1][j] + 1,
                tmp[i][j - 1] + 1,
                tmp[i - 1][j - 1] + (a[i - 1] !== b[j - 1] ? 1 : 0)
            );
        }
    }

    return tmp[a.length][b.length];
}

module.exports = levenshtein;
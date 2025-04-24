// utils/numbers.js

/**
 * Convertit un nombre brut en une représentation humanisée.
 * Exemple: 1234567 -> "environ 1,2 million"
 *
 * Remarque: La conversion est simplifiée et utilise des valeurs en dur.
 * À remplacer par une logique plus fine si nécessaire.
 */
function convert(number) {
    if (number >= 1000000) {
        return "environ " + (number / 1000000).toFixed(1) + " million";
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + " mille";
    }
    return String(number);
}

module.exports = { convert };

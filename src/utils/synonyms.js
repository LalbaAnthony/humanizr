// utils/synonyms.js

/**
 * Remplace certains mots par des synonymes.
 * Options:
 *   limit: nombre maximum de remplacements à effectuer.
 *
 * Remarque: Les synonymes sont définis en dur. À améliorer selon les besoins.
 */
function replace(text, options = {}) {
    const limit = options.limit || 3;
    const dictionnaire = {
        "utiliser": ["se servir de", "employer", "faire usage de"],
        "bonjour": ["salut", "hello", "coucou"]
    };

    let count = 0;
    let words = text.split(" ");
    words = words.map(word => {
        const lower = word.toLowerCase();
        if (dictionnaire[lower] && count < limit) {
            count++;
            // Retourne un synonyme choisi aléatoirement
            const liste = dictionnaire[lower];
            return liste[Math.floor(Math.random() * liste.length)];
        }
        return word;
    });
    return words.join(" ");
}

module.exports = { replace };

a// utils/imperfections.js

/**
 * Ajoute des micro-imperfections au texte.
 * Options:
 *   level: "light", "medium", "strong" - niveau d'imperfections.
 *
 * Exemple: "Ceci est un test." -> "Ceci est, en fait, un test."
 *
 * Remarque: La logique est simplifiée et les imperfection sont en dur.
 */
function apply(text, options = {}) {
    const level = options.level || "light";
    if (level === "light") {
        return text.replace(/\b(est)\b/, "$1, en fait");
    }
    // Pour des niveaux plus élevés, on pourrait ajouter d'autres modifications
    return text;
}

module.exports = { apply };

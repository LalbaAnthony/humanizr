// presets/casual.js

/**
 * Preset pour un style décontracté.
 * Combine réécriture et ajout d'imperfections.
 *
 * Remarque: Ajuster en fonction de la tonalité souhaitée.
 */
function apply(text) {
    let result = text;
    // Ajouter une touche décontractée en début de phrase
    result = "Eh bien, " + result;
    // Ajouter une imperfection légère
    result = result.replace(/\b(c'est)\b/, "$1, tu vois");
    return result;
}

module.exports = { apply };

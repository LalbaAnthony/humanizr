// presets/formal.js

/**
 * Preset pour un style formel.
 * Peut combiner plusieurs fonctionnalités.
 *
 * Remarque: Les valeurs en dur utilisées ici sont à adapter selon les besoins.
 */
function apply(text) {
    // Par exemple, pour un style formel, on ne rajoute pas d'imperfections et on reformule avec un ton soutenu.
    let result = text;
    // Ajouter une courte phrase introductive formelle
    result = "Veuillez noter que : " + result;
    return result;
}

module.exports = { apply };

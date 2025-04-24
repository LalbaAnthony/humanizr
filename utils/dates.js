// utils/dates.js

/**
 * Convertit une date au format "YYYY-MM-DD" en un format français.
 * Exemple: "2023-04-12" -> "le 12 avril 2023"
 *
 * Remarque: Cette implémentation est basique et les mois sont en dur.
 */
function convert(dateString) {
    const mois = [
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString; // valeur en dur, à remplacer par gestion d'erreur
    const [year, month, day] = parts;
    return `le ${parseInt(day)} ${mois[parseInt(month) - 1]} ${year}`;
}

module.exports = { convert };

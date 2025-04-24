const humanize = require('./index');

const aiText = "Bonjour, ceci est un test pour utiliser la fonction rewrite.";

const humanizedText = humanize.rewrite(aiText, { tone: 'casual', avoidRepetition: true });
console.log("Texte humanisé :", humanizedText);

console.log(humanize.number(1234567));
console.log(humanize.date("2023-04-12"));
console.log(humanize.synonymize("Je vais utiliser ce code."));

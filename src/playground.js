const humanize = require('./index');

const text = "Il faut du courage pour affronter ses ennemis mais il en faut encore plus pour affronter ses amis";

console.log("======================================================");
console.log("humanize.typos: ");
console.log(humanize.typos.make(text, { percentage: 0.1, types: ['random', 'swap', 'map'], keyboard: 'azerty' }));

console.log("======================================================");
console.log("humanize.spellings: ");
console.log(humanize.spellings.make(text));

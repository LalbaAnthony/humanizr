const humanizrr = require('./index');

const text = "Live is like a box of chocolates. You never know what you're gonna get.";

console.log("======================================================");
console.log("humanizrr.typos: ");
console.log(humanizrr.typos.make(text, { percentage: 0.1, types: ['random', 'swap', 'map'], keyboard: 'qwerty' }));

console.log("======================================================");
console.log("humanizrr.spellings: ");
console.log(humanizrr.spellings.make(text));

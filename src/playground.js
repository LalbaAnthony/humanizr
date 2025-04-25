const humanizrr = require('./index');

const text = "Live is like a box of chocolates. You never know what you're gonna get.";

console.log("======================================================");
for (i = 0; i < 10; i++) {
    console.log(humanizrr.typos.make(text, { types: { swap: 0, map: 0.01, duplicate: 0, drop: 0 } }));
}

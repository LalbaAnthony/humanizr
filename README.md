# 🤖 - humanizrr

humanizrr is a Node.js library that provides methods for humanizing strings for AI-generated content.

## 🚀 - Installation

```bash
npm install humanizrr
```

## ✒️ - Usage

### Make typos

```javascript
const humanizrr = require('humanizrr');

const text = "I am the one who knocks.";
console.log(humanizrr.typos.make(text, { percentage: 0.01, types: ['swap', 'map'], keyboard: 'qwerty' }));
// Output will be something like: "I am the one who knoks."
```
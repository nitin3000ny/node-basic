// math.js
function add(a, b) {
    return a + b;
  }
  module.exports = { add };
  
  // app.js
  const math = require('./math');
  console.log(math.add(2, 3)); // Output: 5

  
// math.mjs
export function add(a, b) {
    return a + b;
  }
  
  // app.mjs
  import { add } from './math.mjs';
  console.log(add(2, 3)); // Output: 5

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));

    const fs = require('fs');

    // Writing to a file
    fs.writeFile('example.txt', 'Hello, World!', err => {
      if (err) throw err;
      console.log('File written successfully');
    });
    
    // Reading from a file
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data); // Output: Hello, World!
    });
    
const path = require('path');

// Retrieves the directory path of the file (Ex: 'C:\code\node-crash-course\path_demo.js')
console.log(__filename);

// Retrieves just the directory path for the file (Ex: 'C:\code\node-crash-course\')
console.log(path.dirname(__filename));

// Retrieves just the basename of the file (Ex: 'path_demo.js')
console.log(path.basename(__filename));

// Retrieves just the extension for the file (Ex: '.js' for 'path_demo.js')
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
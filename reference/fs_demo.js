const fs = require('fs');
const path = require('path');

// Example One

// Create Folder
// fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {

//     // Throws error message in console if an error is found
//     if(err) throw err;

//     // Informs user that a folder was created in the console
//     console.log('Folder created...')

// });

// Example Two

// Create & Write To File
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'This is a test...hello!', (err) => {

//     // Throws error message in console if an error is found
//     if(err) throw err;

//     // Informs user that a folder was created in the console
//     console.log('File written to...')

// });

// Example Three

// Create & Write To File
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'This is a test...hello! ', (err) => {

    // Throws error message in console if an error is found
    if(err) throw err;

    // Informs user that a folder was created in the console
    console.log('File written to...')

    // Appends new text to the existing file
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'This is another test...good bye! ', (err) => {

        // Throws error message in console if an error is found
        if(err) throw err;
    
        // Informs user that a folder was created in the console
        console.log('File written to...')
    
    });

});
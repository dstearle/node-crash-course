const fs = require('fs');
const path = require('path');

// Create Folder
fs.mkdir(path.join(__dirname, 'test'), {}, function(err){

    // Throws error message in console if an error is found
    if(err) throw err;

});
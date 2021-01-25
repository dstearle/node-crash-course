// Exaple One

    // const person = require('./person');

    // console.log(person.name);

// Exaple Two

    // Imports in the 'Person' class
    // const Person = require('./person');

    // // Applies the provided data to the 'Person' class
    // const person1 = new Person('Alexander Earle', 1);

    // // Runs the 'greeting' function in the 'Person' class
    // person1.greeting();

// Example Three

    // Imports the file needed
    // const Logger = require('./logger');

    // // Applies the Logger class
    // const logger = new Logger();

    // // Preps the data
    // logger.on('message', (data) => console.log('Called Listener: ', data));

    // // Uses the Logger class
    // logger.log('Hello there!');
    // logger.log('Hey there!');
    // logger.log('JUMBO!');

// Example Four

    // Imports
    // const http = require('http');
    // const path = require('path');
    // const fs = require('fs');

    // // Creates the server
    // const server = http.createServer((req, res) => {

    //     // Prints out the current url in the console
    //     // console.log(req.url);

    //     // If the current url is set to nothing go to home
    //     if(req.url === '/') {

    //         // The content type
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         // The content to show on the page
    //         res.end('<h1>Welcome Home Son :)</h1>');

    //     }

    // });

    // // The port for the server to use
    // const PORT = process.env.PORT || 5000;

    // server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Example Five

    // Imports
    // const http = require('http');
    // const path = require('path');
    // const fs = require('fs');

    // // Creates the server
    // const server = http.createServer((req, res) => {

    //     // Prints out the current url in the console
    //     // console.log(req.url);

    //     // If the current url is set to the home page
    //     if(req.url === '/') {

    //         // Reads the file 'index.html'
    //         fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {

    //             // If error is found
    //             if(err) throw err;

    //             // Content Type & 200 Status
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             // The content to be shown
    //             res.end(content);

    //         })

    //     }

    //     // If the current url is set to the about page
    //     if(req.url === '/about') {

    //         // Reads the file 'index.html'
    //         fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {

    //             // If error is found
    //             if(err) throw err;

    //             // Content Type & 200 Status
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             // The content to be shown
    //             res.end(content);

    //         })

    //     }

    //     // If the current url is set like an api
    //     if(req.url === '/api/users') {

    //         // An array of user data
    //         const users = [
    //             { name: 'Alexander', age: 1 },
    //             { name: 'Dallas', age: 30 },
    //         ];

    //         // Content Type & 200 Status
    //         res.writeHead(200, {'Content-Type': 'application/json'});
    //         // Sets the 'user' array to json
    //         res.end(JSON.stringify(users));

    //     }

    // });

    // // The port for the server to use
    // const PORT = process.env.PORT || 5000;

    // server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Example Six

    // Imports
    const http = require('http');
    const path = require('path');
    const fs = require('fs');

    // Creates the server
    const server = http.createServer((req, res) => {

        // Build file path
        let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

        // Extension of file
        let extname = path.extname(filePath);

        // Initial content type
        let contentType = 'text/html';

    });

    // The port for the server to use
    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
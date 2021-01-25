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
    const http = require('http');
    const path = require('path');
    const fs = require('fs');

    // Creates the server
    const server = http.createServer((req, res) => {

        console.log(req.url);

    });

    // The port for the server to use
    const PORT = process.env.PORT || 5000;

    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
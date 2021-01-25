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
    const Logger = require('./logger');

    // Applies the Logger class
    const logger = new Logger();

    // Preps the data
    logger.on('message', (data) => console.log('Called Listener: ', data));

    // Uses the Logger class
    logger.log('Hello there!');
    logger.log('Hey there!');
    logger.log('JUMBO!');
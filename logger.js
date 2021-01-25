const EventEmitter = require('events');
const uuid = require('uuid');

// Prints out a generated ID to the console
// console.log(uuid.v4());

// A class that can be exported elsewhere
class Logger extends EventEmitter {

    log(msg) {

        // Call Event
        this.emit('message', { id: uuid.v4(), msg });

    }

}

// Exports the Logger class
module.exports = Logger;
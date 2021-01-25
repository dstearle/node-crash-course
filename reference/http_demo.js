const http = require('http');

// Creates server object
http.createServer((req, res) => {

    // Write response
    res.write('Allo my name is NIGEL THARNBARRY!')
    // End response
    res.end()

}).listen(5000, () => console.log('Server running...'));
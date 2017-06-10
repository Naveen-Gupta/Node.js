const http = require('http');
const port = 8000;
const server = require('./server');

http.createServer(server.handleRequest)
    .listen(port, () => {
        console.log("server is running now..");
    });//listen
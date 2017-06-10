const http = require('http');
const port = 8000;
const server = require('./app');

http.createServer(server.handleRequest)
    .listen(port, () => {
        console.log("server is running now..");
    });//listen
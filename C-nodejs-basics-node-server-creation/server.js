//to execute it run go to containing directory and type node server
const http = require('http');//http is a core module loaded by nodejs
const host = '127.0.0.1';
const port = 8082;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('header');
    res.end('Hello World!');
});

server.listen(port, host, ()=>{
  console.log("server is running now..");
});

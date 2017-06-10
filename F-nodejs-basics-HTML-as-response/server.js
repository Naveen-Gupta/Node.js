const http = require('http');
const port = 8000;
const fs = require('fs');

http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./index.html', null, (err, data) =>{
        if(err){
          res.writeHead(404);
          console.log('file not found..');
        }
        else{
          res.write(data);
        }//if-else
      res.end();
    });//readFile   
}).listen(port, ()=>{
  console.log("server is running now..");
});//listen
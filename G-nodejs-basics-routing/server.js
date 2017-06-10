const fs = require('fs');
const url = require('url');

function renderHTML(path, res) {
    fs.readFile(path, null, (err, data) => {
        if (err) {
            res.writeHead(404);
            console.log('file not found..');
        } else {
            res.write(data);
        }//if-else
        res.end();
    });//readFile   
}//renderHTML

module.exports = {
    handleRequest: (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        const path = url.parse(req.url).pathname;
        switch (path) {
            case '/':
                renderHTML('./index.html', res);
                break;
            case '/login':
                renderHTML('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('not found..');
                res.end();
        }//switch
    }//handleRequest
};//module.exports


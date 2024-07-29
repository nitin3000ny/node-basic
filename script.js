const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
       res.end(fs.readFileSync('./index.html','utf-8'));
    } 
    else if(req.url==='/page1'){
        res.end(fs.readFileSync('./style.css','utf-8'));
    }
    else if(req.url==='/page2'){
        res.end(fs.readFileSync('./script.js','utf-8'));
    }
    else {
        // res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 - Not Found');
    }
});

// server.listen(port, hostname, () => {
//     console.log(Server running at http://${hostname}:${port}/);
// });
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
  });
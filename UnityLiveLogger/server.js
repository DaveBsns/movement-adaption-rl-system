const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/log') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('Log Data:', body);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Log received\n');
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found\n');
    }
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});

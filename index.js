const http = require('http');
const fs = require('fs');

const host = '0.0.0.0';
const port = 2912;

const server = http.createServer(async (req, res) => {
    try {
        const fileContent = await fs.promises.readFile('cs2.txt', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(fileContent);
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(port, host, () => {
    console.log(`Server is listening on port ${port}`);
});
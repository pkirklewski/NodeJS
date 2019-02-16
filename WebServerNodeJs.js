

const http = require('http');
const server =  http.createServer((req, res) => {res.end('The server is running...\n' + Math.random());});
server.listen(8080, () => {console.log('The server is running...');});


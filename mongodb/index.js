const http = require('http');
const app = require('./app');
require('./db');

const server = http.createServer(app);
server.on('error', console.error);
server.on('listening', () => {
  console.log('server listening on ', 3000);
});

server.listen(3000);

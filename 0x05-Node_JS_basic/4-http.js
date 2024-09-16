/*
 * Basic HTTP server using Node's HTTP module
 * Listening to localhost::1245
*/
const http = require('http');
const displayMessage = require('./0-console');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen((1245), () => {
  displayMessage('Server listening to localhost:1245');
});

module.exports = app;

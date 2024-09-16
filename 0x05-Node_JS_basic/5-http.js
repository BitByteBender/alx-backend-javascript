/*
 * Complex HTTP server using Node's HTTP module
 * Listening to localhost::1245
*/
const http = require('http');
const displayMessage = require('./0-console');
const stFile = require('./file_handler');

const argPath = process.argv.length > 2 ? process.argv[2] : '';

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.end('Hello Holberton School!');
      break;
    case '/students':
      if (!argPath) {
        res.statusCode = 400;
        res.end('Missing Arg! Argument count should be 2');
      } else {
        try {
          const result = await stFile(argPath);
          res.statusCode = 200;
          res.end(result);
        } catch (err) {
          res.statusCode = 500;
          res.end('Cannot load the database');
        }
      }
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
});

app.listen((1245), () => {
  displayMessage('Server listening to localhost:1245');
});

module.exports = app;

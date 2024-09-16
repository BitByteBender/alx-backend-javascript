/*
 * Creation of small http server using Express
 */
const express = require('express');
const displayMessage = require('./0-console');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen((1245), () => {
  displayMessage('Server is listening to http://localhost:1245');
});

module.exports = app;

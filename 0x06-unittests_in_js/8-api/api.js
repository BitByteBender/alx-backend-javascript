const express = require('express');

const app = express();
const HOST = 'localhost';
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.listen((PORT), (HOST), () => {
  console.log(`API available on ${HOST} port ${PORT}`);
});

module.exports = app;

const express = require('express');

const app = express();
const HOST = 'localhost';
const PORT = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    },
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    return res.status(400).send('Missing username');
  }
  res.send(`Welcome ${userName}`);
});

app.listen((PORT), (HOST), () => {
  console.log(`API available on ${HOST} port ${PORT}`);
});

module.exports = app;

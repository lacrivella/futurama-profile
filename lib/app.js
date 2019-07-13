const express = require('express');
const app = express();
const { getRandomQuote } = require('./services/futuramaApi');

app.use(express.json());

app.get('/random', (req, res) => {
  getRandomQuote(1)
    .then(quote => res.send(quote));
});


module.exports = app;

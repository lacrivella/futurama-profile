const { Router } = require('express');
const futuramaQuote = require('../middleware/futuramaQuote');
const profiles = [];
module.exports = Router()
  .post('/', futuramaQuote, (req, res) => {
    const {
      name, favoriteCharacter
    } = req.body;
    const profile = {
      name: name,
      favoriteCharacter: favoriteCharacter,
      tagline: req.quote.quote
    };
    profiles.push(profile);
    res.send(profile);
  })
  .get('/random', futuramaQuote, (req, res) => {
    res.send(req.quote);
  });
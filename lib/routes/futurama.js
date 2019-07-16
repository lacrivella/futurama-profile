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
  .get('/api/v1/profiles', futuramaQuote, (req, res) => {
    res.send(profiles);
  })
  .get('/api/v1/profiles/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })
  .patch('/api/v1/profiles/:id', futuramaQuote, (req, res) => {
    const { favoriteCharacter } = req.body;
    const tagline = req.quote.quote;
    profiles[req.params.id].favoriteCharacter = favoriteCharacter;
    profiles[req.params.id].tagline = tagline;
    
    res.send(profiles[req.params.id]);
  })
  .delete('/api/v1/profiles/:id', (req, res) => {
    const deleted = profiles.splice(req.params.id, 1);
    res.send(deleted[0]);
  });


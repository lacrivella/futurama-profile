const request = require('supertest');
const app = require('../lib/app')

describe('futurama', () => {
  it('creates profile with post', () => {
    return request(app)
      .post('/api/v1/profiles')
      .send({
        name: 'leigh-ann',
        favoriteCharacter: 'Bender'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'leigh-ann',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  }); 
});

//get profile
//get profile by index
//update favorite character
//delete profile by index
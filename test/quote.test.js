const request = require('supertest');
const app = require('../lib/app')

describe('futurama', () => {
  it('creates profile with POST', () => {
    return request(app)
      .post('/')
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

  it('GET profile', () => {
    return request(app)
      .get('/api/v1/profiles')
      .then(res => {
        expect(res.body).toEqual([{
          name: 'leigh-ann',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        }]);
      }); 
  });

  it('Get profile by id', () => {
    return request(app)
      .get('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'leigh-ann',
          favoriteCharacter: 'Bender',
          tagline: expect.any(String)
        });
      });
  });

  it('PATCH update favorite character', () => {
    return request(app)
      .patch('/api/v1/profiles/0')
      .send({
        favoriteCharacter: 'Fry'
      })
      .then(res => {
        expect(res.body).toEqual({
          name: 'leigh-ann',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('DELETES a profile by index', () => {
    return request(app)
      .delete('/api/v1/profiles/0')
      .then(res => {
        expect(res.body).toEqual({
          name: 'leigh-ann',
          favoriteCharacter: 'Fry',
          tagline: expect.any(String)
        });
      });
  });

  it('returns 404 error', () => {
    return request(app)
      .get('/nope')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('File Not Found'));
      });
  });
});

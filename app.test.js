const request = require('supertest');
const app = require('./app');

test('GET / returns hello message', async () => {
  const res = await request(app).get('/');
  expect(res.body.message).toBe('Hello from CI/CD pipeline!');
});

test('GET /add/2/3 returns 5', async () => {
  const res = await request(app).get('/add/2/3');
  expect(res.body.result).toBe(5);
});
const test = require('ava');
const supertest = require('supertest');
const app = require('../app');

const request = (url) => supertest(app).get(url);

test('handlers: public data', async (t) => {
  const response = await request(`/api/public`);
  t.is(response.status, 200);
});

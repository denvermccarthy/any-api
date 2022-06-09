const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const nuts = require('../data/nuts');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/nuts/:id test', async () => {
    const req = await request(app).get('/nuts/1');
    const almond = {
      id: '1',
      nut: 'Almond',
      origin: 'Originated in Iran and the surrounding area.',
    };
    expect(req.body).toEqual(almond);
  });
  it('/nuts test', async () => {
    const req = await request(app).get('/nuts');

    expect(req.body).toEqual(nuts);
  });
  afterAll(() => {
    pool.end();
  });
});

/** global: jest */

const router = require('./../../../../../src/back/routes/index');

describe('Index routes.', () => {
  test('GET homepage', (done) => {
    const request = {
      method: 'GET',
      url: '/',
    };
    const response = {
      redirect: (targetUrl) => {
        expect(targetUrl).toMatch(/.+/);
        done();
      },
    };

    router.handle(request, response);
  });
});

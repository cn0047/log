/** global: jest */

const router = require('./../../../../../src/back/routes/index');

describe('Index routes.', () => {
  test('GET page by streamId', (done) => {
    const request = {
      method: 'GET',
      url: '/testId',
    };
    const response = {
      render: (tpl, data) => {
        expect(tpl).toBe('index');
        expect(typeof data).toBe('object');
        done();
      },
    };

    router.handle(request, response);
  });
});

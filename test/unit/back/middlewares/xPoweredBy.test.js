const xPoweredBy = require('./../../../../src/back/middlewares/xPoweredBy');

describe('X-Powered-By middleware.', () => {
  test('Main test', () => {
    /** global: jest */

    const cb = jest.fn();
    const res = {
      removeHeader: jest.fn(),
    };

    xPoweredBy({}, res, cb);

    expect(res.removeHeader).toHaveBeenCalled();
    expect(cb).toHaveBeenCalled();
  });
});

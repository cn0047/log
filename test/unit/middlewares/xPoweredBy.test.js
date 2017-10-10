const xPoweredBy = require('./../../../src/middlewares/xPoweredBy');

describe('X-Powered-By middleware.', () => {
  test('Main test', () => {
    const cb = jest.fn();
    const res = {
      removeHeader: jest.fn(),
    };

    xPoweredBy({}, res, cb);

    expect(res.removeHeader).toHaveBeenCalled();
    expect(cb).toHaveBeenCalled();
  });
});

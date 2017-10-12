const cors = require('./../../../src/middlewares/cors');

describe('CORS middleware.', () => {
  test('Main test', () => {
    /** global: jest */

    const cb = jest.fn();
    const res = {
      header: jest.fn(),
    };

    cors({}, res, cb);

    expect(res.header.mock.calls.length).toBe(2);
    expect(cb).toHaveBeenCalled();
  });
});

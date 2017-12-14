/** global: jest */

const router = require('./../../../../src/routes/index');

// Request common for all test cases.
const request = {
  method: 'POST',
  url: '/testId',
  headers: {},
  connection: {
    socket: { remoteAddress: 'testIp' },
  },
  socket: {},
  body: '',
};

describe('Index routes.', () => {
  test('POST plain text into page with certain streamId', (done) => {
    request.headers = { 'x-forwarded-for': 'testIp', 'content-type': 'text/plain' };
    request.body = 'Test with plain text body.';
    const response = { status: jest.fn(), send: () => done() };

    router.handle(request, response);
  });

  test('POST JSON data into page with certain streamId', (done) => {
    request.headers = { 'content-type': 'application/json' };
    request.body = '{"decs": "JSON data"}';
    const response = { status: jest.fn(), send: jest.fn() };
    global.socket = {
      emit: (type, data) => {
        expect(type).toBe('log');
        expect(typeof data).toBe('object');
        done();
      },
    };

    router.handle(request, response);
  });
});

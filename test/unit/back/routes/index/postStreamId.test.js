/** global: jest */

const jsonRequest = require('./../../../stubs/routes/jsonRequest');
const plainRequest = require('./../../../stubs/routes/plainRequest');
const router = require('./../../../../../src/back/routes/index');

describe('Index routes.', () => {
  test('POST plain text into page with certain streamId and disconnected socket.', (done) => {
    const response = { status: jest.fn(), send: () => done() };

    router.handle(plainRequest, response);
  });

  test('POST plain text into page with certain streamId', (done) => {
    const response = { status: jest.fn(), send: () => done() };
    global.socket = {};

    router.handle(plainRequest, response);
  });

  test('POST JSON data into page with certain streamId', (done) => {
    const response = { status: jest.fn(), send: jest.fn() };
    global.socket = {
      emit: (type, data) => {
        expect(type).toBe('log');
        expect(typeof data).toBe('object');
        done();
      },
    };

    router.handle(jsonRequest, response);
  });
});

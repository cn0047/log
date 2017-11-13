const router = require('./../../../src/routes/index');

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

  test('POST to page by streamId', (done) => {
    const request = {
      method: 'POST',
      url: '/testId',
      headers: {
        'content-type': 'application/json',
      },
      connection: {
        socket: {
          remoteAddress: 'testIp',
        },
      },
      socket: {},
      body: 'RAW Body.',
    };
    const response = {
      status: jest.fn(),
      send: jest.fn(),
    };
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

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

  /**
   * This block describes test cases related to POSTing data into page.
   */
  describe('POST data into page with certain streamId.', () => {
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
    /** global: jest */
    const response = {
      status: jest.fn(),
      send: jest.fn(),
    };

    test('POST JSON', (done) => {
      request.body = '{"decs": "JSON data"}';
      global.socket = {
        emit: (type, data) => {
          expect(type).toBe('log');
          expect(typeof data).toBe('object');
          done();
        },
      };

      router.handle(request, response);
    });

    test('POST plain text', (done) => {
      request.headers['content-type'] = 'text';
      response.send = () => done();

      router.handle(request, response);
    });
  });
});

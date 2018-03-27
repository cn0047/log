/** global: jest */

const request = require('./../../../../../src/back/services/request');

describe('Get Ip', () => {
  test('', () => {
    const req = {
      headers: [],
      connection: {
        socket: { remoteAddress: 'testIp' },
      },
      socket: {},
    };

    expect(request.getIp(req)).toBe('testIp');
  });
});

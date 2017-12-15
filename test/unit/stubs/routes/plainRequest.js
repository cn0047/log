module.exports = {
  method: 'POST',
  url: '/testId',
  headers: {
    'x-forwarded-for': 'testIp',
    'content-type': 'text/plain',
  },
  connection: {
    socket: {
      remoteAddress: 'testIp',
    },
  },
  socket: {},
  body: 'Test with plain text body.',
};

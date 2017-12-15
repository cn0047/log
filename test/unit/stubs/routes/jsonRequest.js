module.exports = {
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
  body: '{"decs": "JSON data"}',
};

const express = require('express');

const router = express.Router();

/**
 * Homepage route, which will redirect to page with random stream id.
 *
 * @param {Object} req HTTP request.
 * @param {Object} res HTTP response.
 */
router.get('/', (req, res) => {
  const streamId = Math.random().toString(36).substring(2);
  res.redirect(`/${streamId}`);
});

/**
 * Stream page route. Renders web page for particular stream id.
 *
 * @param {Object} req HTTP request.
 * @param {Object} res HTTP response.
 */
router.get('/:streamId?', (req, res) => {
  res.render('index', {
    hostName: global.APP_HOST_NAME,
    host: global.APP_HOST,
    port: global.APP_PORT_FOR_HELP_BLOCK,
    socketIoJs: global.APP_SOCKET_IO_JS,
    streamId: req.params.streamId,
  });
});

/**
 * Post message into page with particular stream id.
 *
 * @emits LOG.NEW
 *
 * @param {Object} req HTTP request.
 * @param {Object} res HTTP response.
 */
router.post('/:streamId?', (req, res) => {
  // Capture message sender ip address as additional information.
  const ip = req.headers['x-forwarded-for']
    || req.connection.remoteAddress
    || req.socket.remoteAddress
    || req.connection.socket.remoteAddress;

  // Emit WebSocket event.
  if (req.headers['content-type'] === 'application/json') {
    global.socket.broadcast.to(req.params.streamId).emit('log', {
      format: 'json', data: req.body, ip,
    });
  }

  // No need to provide any payload, just empty body and success status code.
  res.status(204);
  res.send('');
});

module.exports = router;

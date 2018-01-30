const io = require('socket.io-client');

const app = require('./../app');
const renderJson = require('./../services/renderJson');

const socket = io.connect();

/**
 * Handler for WebSocket 'connect' event.
 * Emits 'join' event which is intended to join WebSocket room for current streamId.
 */
socket.on('connect', () => {
  socket.emit('join', app.getStreamId());
});

/**
 * Handler for new data.
 * Renders data on web page (add to the bottom).
 *
 * @event LOG.NEW
 */
socket.on('log', (data) => {
  // It is only way to render proper data because socket.io rooms disabled here
  // @see https://github.com/cn007b/log/blob/master/src/routes/index.js#L49
  if (data.streamId !== app.getStreamId()) {
    return;
  }

  if (data.format === 'json') {
    /** global: app */
    renderJson(data, app.getAutoScroll());
  }
});

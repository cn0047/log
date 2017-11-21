/** global: io */
const socket = io.connect();
const streamId = window.location.pathname.substring(1);

/**
 * Handler for WebSocket 'connect' event.
 * Emits 'join' event which is intended to join WebSocket room for current streamId.
 */
socket.on('connect', () => {
  socket.emit('join', streamId);
});

/**
 * Handler for new data.
 * Renders data on web page (add to the bottom).
 *
 * @event LOG.NEW
 */
socket.on('log', (data) => {
  /** global: gtag */
  gtag('event', 'got_new_log', {'count': 1});

  // It is only way to render proper data because socket.io rooms disabled here
  // @see https://github.com/cn007b/log/blob/master/src/routes/index.js#L49
  if (data.streamId !== streamId) {
    gtag('event', 'stream_id_mismatch', {'streamIdMismatch': 1});
    return;
  }

  if (data.format === 'json') {
    /** global: app */
    renderJson(data, app.autoScrool);
  }
});

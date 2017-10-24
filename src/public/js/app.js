/** global: io */
const socket = io.connect();
const streamId = window.location.pathname.substring(1);
let autoScrool = true;

/**
 * Auto-scrolling to latest data.
 */
window.addEventListener('onscroll', () => {
  autoScrool = (
    (window.innerHeight + window.scrollY) >= document.body.offsetHeight
  );
});

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
  if (data.format === 'json') {
    renderJson(data);
  }
});

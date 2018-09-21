const io = require('socket.io-client');
const isObject = require('is-it-object');

const app = require('./../app');
const counter = require('./../services/counter');
const renderJson = require('./../services/renderJson');
const { trackEventLogNew } = require('./../services/googleAnalytics');

const socket = io.connect();

/**
 * Handler for WebSocket 'connect' event.
 * Emits 'join' event which is intended to join WebSocket room for current streamId.
 */
socket.on('connect', () => {
  socket.emit('join', app.getStreamId());
});

/**
 * Handler for WebSocket 'disconnect' event.
 */
socket.on('disconnect', () => {
  // By default `autoConnect` is enabled, so no use to do any actions here.
});

/**
 * Handler for new data.
 * Renders data on web page (add to the bottom).
 *
 * @event LOG.NEW
 */
socket.on('log', (data) => {
  if (isObject(data) === false) {
    return;
  }

  // It is only way to render proper data because socket.io rooms disabled here
  // @see https://github.com/cn007b/log/blob/master/src/back/routes/index.js:52
  if (data.streamId !== app.getStreamId()) {
    return;
  }

  if (data.format === 'json') {
    /** global: app */
    renderJson(data, app.getAutoScroll());
    counter.inc();
    trackEventLogNew();
  }
});

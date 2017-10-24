const socket = {};

/**
 * WebSocket handler for 'join' event.
 *
 * @param {String} streamId Id of particular stream, AKA room.
 */
socket.join = (streamId) => {
  global.socket.join(streamId);
};

module.exports = socket;

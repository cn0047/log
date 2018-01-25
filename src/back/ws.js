const socketIo = require('socket.io');

const sockets = require('./sockets/index');

/**
 * Init WebSocket server.
 *
 * @param {Object} httpServer HTTP server instance object.
 */
module.exports.listen = (httpServer) => {
  const socketServer = socketIo.listen(httpServer);

  socketServer.on('connect', (socket) => {
    global.socket = socket;
    global.socket.on('join', sockets.join);
  });
};

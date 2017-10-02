/**
 * Application entry point.
 *
 * @alias Bootstrap.
 */

const socketIo = require('socket.io');

const app = require('./app');
require('./configs/main');

// Start app.
const server = app.listen(global.APP_PORT);
global.socket = socketIo.listen(server);

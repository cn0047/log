/**
 * Application entry point.
 *
 * @alias Bootstrap.
 */

const app = require('./app');
const ws = require('./ws');
require('./configs/main');

// Start app.
const server = app.listen(global.APP_PORT);
ws.listen(server);

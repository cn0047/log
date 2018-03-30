/**
 * Application entry point.
 *
 * @alias Bootstrap.
 */

require('./configs/main');
require('newrelic');

const app = require('./app');
const ws = require('./ws');

// Start app.
const server = app.listen(global.APP_PORT);
ws.listen(server);

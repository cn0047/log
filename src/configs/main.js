/**
 * All top app configs housed here.
 */

global.APP_PORT = process.env.PORT || 3000;
global.APP_PORT_FOR_HELP_BLOCK = process.env.ENV === 'prod' ? 443 : global.APP_PORT;
global.APP_HOST_NAME = process.env.ENV === 'prod' ? 'realtimelog.herokuapp.com' : 'localhost';
global.APP_HOST = process.env.ENV === 'prod' ? `https://${global.APP_HOST_NAME}` : `http://${global.APP_HOST_NAME}`;
global.APP_SOCKET_IO_JS = `${process.env.ENV === 'prod' ? global.APP_HOST : ''}/socket.io/socket.io.js`;

global.SENTRY_DSN_FRONTEND = process.env.SENTRY_DSN_FRONTEND;
global.SENTRY_DSN_BACKEND = process.env.SENTRY_DSN_BACKEND;

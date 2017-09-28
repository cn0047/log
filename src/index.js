/**
 * Application entry point.
 *
 * @alias App.
 */

const express = require('express');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

const cors = require('./middlewares/cors');
const xPoweredBy = require('./middlewares/xPoweredBy');
const routes = require('./routes/index');

require('./configs/main');

// Init app.
const app = express();
const server = app.listen(global.APP_PORT);
global.socket = socketIo.listen(server);

// Configure app.
app.use(express.static('./src/public'));
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);
app.use(xPoweredBy);
app.use('/', routes);

/**
 * Application.
 *
 * @alias App.
 */

const express = require('express');
const bodyParser = require('body-parser');

const cors = require('./middlewares/cors');
const xPoweredBy = require('./middlewares/xPoweredBy');
const routes = require('./routes/index');

// Init app.
const app = express();
// Configure app.
app.use(express.static('./src/public'));
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);
app.use(xPoweredBy);
app.use('/', routes);

module.exports = app;

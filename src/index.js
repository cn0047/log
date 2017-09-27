const express = require('express');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

const routes = require('./routes/index');
const cors = require('./middlewares/cors');

require('./configs/main');

const app = express();
const server = app.listen(global.APP_PORT);
global.socket = socketIo.listen(server);

app.use(express.static('./src/public'));
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);
app.use((req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
});
app.use('/', routes);

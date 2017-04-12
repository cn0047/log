var express = require('express');
var bodyParser = require('body-parser');
var socketIo = require('socket.io');

var app = express();
var port = process.env.PORT || 3000;
var host = process.env.ENV === 'prod' ? 'https://realtimelog.herokuapp.com' : 'http://localhost';
var socketIoJs = (process.env.ENV === 'prod' ? host : '') + '/socket.io/socket.io.js';
var server = app.listen(port, function () {
  console.log('Started listen %s:%s ', host, port);
});
var socket = socketIo.listen(server);

app.use(express.static('./src/public'));
app.set('views', './src/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  var streamId = Math.random().toString(36).substring(2);
  res.redirect('/' + streamId);
});

app.get('/:streamId?', function (req, res) {
  res.render('index', {socketIoJs: socketIoJs});
});

app.post('/:streamId?', function (req, res) {
  var ip = req.headers['x-forwarded-for']
    || req.connection.remoteAddress
    || req.socket.remoteAddress
    || req.connection.socket.remoteAddress
  ;
  if (req.headers['content-type'] === 'application/json') {
    socket.emit('log', {streamId: req.params.streamId, format: 'json', data: req.body, ip: ip});
  }
  res.send('');
});

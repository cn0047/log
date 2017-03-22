var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var socketIo = require('socket.io');

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Started listen port: ' + port);
});
var socket = socketIo.listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
    var streamId = Math.random().toString(36).substring(2);
    res.redirect('/' + streamId);
});

app.get('/:streamId?', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/:streamId?', function (req, res) {
    if (req.headers['content-type'] === 'application/json') {
        socket.emit('log', {streamId: req.params.streamId, format: 'json', data: req.body});
    }
    res.send('');
});

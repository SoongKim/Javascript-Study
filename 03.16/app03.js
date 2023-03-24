rvar express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);

app.get('/hello', function(req, res) {
res.sendfile("Hello.html");
});

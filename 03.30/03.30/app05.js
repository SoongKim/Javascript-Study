var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);

app.get('/sg', function(req, res) {
res.sendfile("sawGame.html");
});

app.get('/count', function(req, res) {
res.sendfile("html2.html");
});

app.get('/count2', function(req, res) {
res.sendfile("html3.html");
});

app.get('/testtest', function(req, res) {
res.sendfile("testPfver.html");
});

app.get('/0330', function(req, res) {
res.sendfile("03.30.html");
});

app.get('/js', function(req, res) {
res.sendfile("javascript.html");
});

app.get('/human', function(req, res) {
res.sendfile("human.html");
});

app.get('/new', function(req, res) {
res.sendfile("new.html");
});

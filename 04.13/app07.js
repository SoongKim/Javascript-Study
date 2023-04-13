var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);

app.get('/test369', function(req, res) {
res.sendfile("369.html");
});

app.get('/test3692', function(req, res) {
res.sendfile("test369_2.html");
});

app.get('/pfVer', function(req, res) {
res.sendfile("369Pfver.html");
});

app.get('/arr', function(req, res) {
res.sendfile("arr.html");
});

app.get('/arr1', function(req, res) {
res.sendfile("array01.html");
});

app.get('/arr2', function(req, res) {
res.sendfile("array02.html");
});

app.get('/arr3', function(req, res) {
res.sendfile("array03.html");
});

app.get('/arr4', function(req, res) {
res.sendfile("array04.html");
});

app.get('/arri', function(req, res) {
res.sendfile("arrayIntegration.html");
});

app.get('/arr6', function(req, res) {
res.sendfile("array06.html");
});

app.get('/hc', function(req, res) {
res.sendfile("handCoding.html");
});

app.get('/rd', function(req, res) {
res.sendfile("radioBtn.html");
});

app.get('/cal', function(req, res) {
res.sendfile("cal.html");
});

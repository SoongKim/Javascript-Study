var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);

app.get('/helloWorld', function(req, res) {
res.sendfile("hello0.html");
});

app.get('/writing', function(req, res) {
res.sendfile("newfile.html");
});

app.get('/test', function(req, res) {
console.log("Well come")
});

app.get('/table', function(req, res) {
res.sendfile("table.html")
});

app.get('/table2', function(req, res) {
res.sendfile("table02.html")
});

app.get('/table3', function(req, res) {
res.sendfile("table03.html")
});

app.get('/tables', function(req, res) {
res.sendfile("tables.html")
});

app.get('/css', function(req, res) {
res.sendfile("css.html")
});

app.get('/script', function(req, res) {
res.sendfile("javascript.html")
console.log("server client")
});

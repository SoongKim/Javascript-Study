var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);

app.get('/sg', function(req, res) {
console.log("Hello world");
});

app.get('/test', function(req, res) {
res.sendfile("html01.html");
});

app.get('/test2', function(req, res) {
res.sendfile("html02.html");
});

app.get('/prank', function(req, res) {
res.sendfile("htmlprank.html");
});

app.get('/test3', function(req, res) {
res.sendfile("nineNine.html");
});

app.get('/test4', function(req, res) {
res.sendfile("nineNine2.html");
});

app.get('/test5', function(req, res) {
res.sendfile("pfverNineNine.html");
});

app.get('/test03', function(req, res) {
res.sendfile("html03.html");
});

app.get('/369', function(req, res) {
res.sendfile("369.html");
});

app.get('/pf369', function(req, res) {
res.sendfile("pfverNine.html");
});

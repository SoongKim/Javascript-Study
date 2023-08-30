var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);

const host = 'localhost';
const port = 13333;

var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1234',
  database : 'soongkim'
});

connection.connect();
// Q : Web이 뭐냐 A : Request와 Response다!
// DNS : Domain Name System.

app.get('/test', function(req, res){
  res.sendfile('newHtml.html');
});

app.get('/facto', function(req, res){
  res.sendfile('fact.html');
});

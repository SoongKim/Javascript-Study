var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

var mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '0000',
  database : 'web'
});

connection.connect();

app.get('/sql', function(req, res) {
  res.sendfile("sql.html");
});

app.get('/sql2', function(req, res) {
  res.sendfile("sql2.html");
});

app.get('/dbinfo', function(req, res) {
  let query = `SELECT * FROM post ORDER BY NO ASC;`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
  console.log(results);
  res.send(results);
});
});

app.get('/dbremove', function(req, res){
  let query = `delete from post where NO = ${req.query.NO};`;
  console.log(query);
  connection.query(query, function(error, results, fields){
    console.log(results);
    res.send(results);
  });
});

app.get('/detailPage', function(req, res) {
  res.sendFile("detailPage.html", { root: __dirname });
});

app.get('/detailedPage', function(req, res) {
  res.sendFile("detailedPage.html");
});


app.get('/detailPageS', function(req, res) {
  let query = `SELECT * FROM post WHERE NO = ${req.query.NO}`;
  connection.query(query, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.send(results);
  });
});

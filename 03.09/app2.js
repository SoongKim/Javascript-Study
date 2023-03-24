var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
// express, http 기능을 불러온다
// 기능 불러오기(var과 require 구문)는 무지성으로 외워라.
// 이해하려고 하지 마!

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '0000',
  database : 'web'
});
//연결된 DB와 연결한다. 연결 간 대상 DB의 host, user, password, database를 확인한다.

connection.connect();

// node.app2.js로 연결될 때마다 post 테이블의 모든 데이터를 cmd 창에 불러오는 명령
connection.query('select * from post;', function (error, results, fields) {
  if (error) throw error;
console.log(results);
});

// /update 를 입력하면 NO 값이 5인 열의 데이터를 title : NAME05, content : 5555 값으로 업데이트 하는 명령
app.get('/update', function(req, res) {
connection.query('update post SET title = "NAME05", content = 5555 where NO = 5;', function (error, results, fields) {
  if (error) throw error;
console.log(results);
res.send(results);
  });
});

// /sel 을 입력하면 NO 값이 3인 열의 모든 정보를 불러오는 명령
app.get('/sel', function(req, res) {
connection.query('select * from post WHERE NO = 3;', function (error, results, fields) {
  if (error) throw error;
console.log(results);
res.send(results);
  });
});

// /total 을 입력하면 post 테이블의 모든 데이터를 불러오는 명령어
app.get('/total', function(req, res) {
connection.query('select * from post;', function (error, results, fields) {
  if (error) throw error;
console.log(results);
res.send(results);
  });
});

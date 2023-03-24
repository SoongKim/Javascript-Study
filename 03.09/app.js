var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(93);
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

app.get('/UPDATE', function(req, res) {
connection.query('UPDATE students SET NAME = "장 발 장" WHERE NO = 59;', function (error, results, fields) {
  if (error) throw error;
res.send(results);
});
  });
//localhost:93/UPDATE 입력 시 연동DB students에서 25번째 NAME을 "장 발 장"으로 변경하는 쿼리문
//SET 할 NAME을 " " 안에 입력하고, 변경할 NO를 기입한다.

app.get('/SELECT', function(req, res) {
connection.query('SELECT * FROM students WHERE NO = 70;', function (error, results, fields) {
  if (error) throw error;
res.send(results);
});
  });
//localhost:93/SELECT 입력 시 web DB students에서 26번째 이름을 읽어오는 쿼리문
//students로부터 SELECT 할 no를 선택한다. 해당 no에 위치한 정보를 불러온다.

app.get('/INSERT', function(req, res) {
connection.query('INSERT INTO students (name, birth) VALUE ("왕 건", 19950530);', function (error, results, fields) {
  if (error) throw error;
res.send(results);
});
  });
//localhost:93/CREATE 입력 시 web DB students에 "김 숭 림", 19930419 를 입력하는 쿼리문
//(a, b)에 해당하는 정보를 포맷에 따라 입력한다.
app.get('/kopo', function(req, res) {
  res.sendfile('kopoes.jpg');
});
//localhost:93/kopo 입력 시 kopoes.jpg 파일을 화면에 출력해주는 쿼리문
//현재 cd C:/USERS/SMART16/Desktop/Atom/03.09에서 supervisor를 실행했으므로
//해당 폴더에 위치한 파일을 불러올 수 있다.
//파일 지정 간 ' ', 소괄호로 묶어주는 것을 기억하자.

app.get('/CLASS', function(req, res) {
connection.query('INSERT INTO students (name, birth, class) VALUE ("김 유 신", 19931205, "Noble");', function (error, results, fields) {
  if (error) throw error;
res.send(results);
});
  });

app.get('/helloConsole', function(req, res) {
  console.log("Hello World");
  console.log("This is a real Hello world");
  res.sendfile('test.html');
});
//localhost:93/helloConsole로 접속하면 콘솔(cmd, 터미널)에 Hello World 를 출력한다.

app.get('/helloConsoles', function(req, res) {
  console.log("Hello World");
  res.sendfile('test.txt');
});

app.get('/kopokopo', function(req, res){
    console.log("Opening nodeJsBasic site");
    console.log("Welcome nube");
    res.sendfile('kopo.jpg');
})

app.get('/kopokopokopo', function(req, res){
    console.log("Opening nodeJsBasic site");
    console.log("Welcome nube");
    res.sendfile('nodeJsBasic.lnk');
})

app.get('/kopokopokopokopo', function(req, res){
    console.log("Opening nodeJsBasic site");
    console.log("Welcome nube");
    res.sendfile('test.html');
})

app.get('/testfile', function(req, res){
    console.log("hellofile");
    res.sendfile("test.html");
})

app.get('/testfile02', function(req, res){
    console.log("hellofile");
    res.sendfile('noname.html');
})

app.get('/testfile03', function(req, res){
    console.log("hellofile");
    res.sendfile('clearpath/noname02.html');
})

app.get('/testfile04', function(req, res){
    console.log("hellofile04");
    res.sendfile('clearpath/path01/newhtml.html');
})

app.get('/testfile05', function(req, res){
    console.log("laststep");
    res.sendfile('clearpath/path01/path02/lasthtml.html');
})

app.get('/testcat', function(req, res){
    console.log("Cat is cute");
    res.sendfile('index.html');
})

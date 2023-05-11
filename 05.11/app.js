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
  res.sendfile("heidiSql.html");
});


app.get('/dbtest', function (req, res){
  let titleData = req.query.title;
  let textData = req.query.text;
  console.log(titleData);
  console.log(textData);
  connection.query('insert into JAVASCRIPT values(?, ?);',
  [`${titleData}`, `${textData}`],
  function(error, results, fields){
    if(error) throw error;
    res.send(results);
    console.log(results);
  })
});

app.get('/sql2', function(req, res) {
  res.sendfile("sql2.html");
});

app.get('/dbcon', function(req, res) {
  let query = `SELECT NO, title, content FROM post ORDER BY NO DESC, title DESC, content DESC;`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
  console.log(results);
  res.send(results);
  })
});

app.get('dbremove', function(req, res){
  let no = req.query.targetNO;
  let query = `DELETE FROM post WHERE NO = ${no};`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
    console.log(results);
    res.send(results);
  })
});

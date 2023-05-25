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

app.get('/dbinfo', function(req, res){
  let query = 'SELECT * FROM post ORDER BY NO ASC';
  connection.query(query, function(error, results, fields){
    if(error) throw error
      console.log(results);
    res.send(results);
  });
});

app.get('/detailPage', function(req, res){
  res.sendfile("detailPage.html");
})

app.get('/detailInfo', function(req, res){
  let NO = req.query.NO;
  let query = `SELECT * FROM post WHERE 1=1 AND NO = ${NO}`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
      console.log(results);
      res.send(results);
  });
});

app.get('/dbremove', function(req, res){
  let query = `DELETE FROM post WHERE NO = ${req.query.NO};`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
    console.log(results);
    res.send(results);
  });
});

app.get('/updatePage', function(req, res){
  res.sendfile("updatePage.html");
});

app.get('/dbUpdate', function(req, res){
  let query = `UPDATE post SET content = ${req.query.text} WHERE 1=1 AND title = ${req.query.title};`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
    console.log(results);
    res.send(results);
  })
});

app.get('/dbremove', function(req, res){
  let query = `DELETE FROM post WHERE NO = ${req.query.NO};`;
  connection.query(query, function(error, results, fields){
    if(error) throw error
    console.log(results);
    res.send(results);
  });
});

app.get('/dbinsert', function(req, res){
  res.sendfile("dbinsert.html");
})

app.get('/inputData', function(req, res){
  let NO = req.query.NO;
  let title = req.query.title;
  let content = req.query.content;

  let query = 'INSERT INTO post (NO, title, content) VALUES (?, ?, ?)';
  connection.query(query, [NO, title, content], function(error, results, fields){
    if(error) throw error;
    console.log(results);
    res.send(results);
  });
});

app.get('/new', function(req, res){
  res.sendfile("newProject.html");
})

app.get('/chart', function(req, res){
  res.sendfile("chart.html");
})

app.get('/chart2', function(req, res){
  res.sendfile("chart2.html");
})

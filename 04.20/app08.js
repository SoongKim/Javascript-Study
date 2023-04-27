var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/sc1', function(req, res) {
res.sendfile("script01.html");
});

app.get('/sc2', function(req, res) {
res.sendfile("script02.html");
});

app.get('/ajax', function(req, res) {
res.sendfile("ajax.html");
});

app.get('/ajaxTest', function(req, res) {
res.send("ajax response");
});

// app.get('/request1', function(req, res) {
// res.send("requestResponse1");
// });
//
// app.get('/request2', function(req, res) {
// res.send("requestResponse2");
// });
//
// app.get('/request3', function(req, res) {
// res.send("requestResponse3");
// });
//
// app.get('/qs', function(req, res) {
// res.sendfile("qs.html");
// });
//
// app.get('/qsSum', function(req, res) {
//   let num1 = Number(req.query.num1);
//   let num2 = Number(req.query.num2);
//   let resultNum = num1+num2;
//   res.send(""+resultNum);
// });

// app.get('/mul', function(req, res) {
// res.sendfile("mul.html");
// });
//
// app.get('/mulCal', function(req, res) {
//   let num1 = Number(req.query.num1);
//   let num2 = Number(req.query.num2);
//   let num3 = Number(req.query.num3);
//   let resultNum = num1*num2*num3;
//   res.send(""+resultNum);
// });

app.get('/buy', function(req, res) {
  res.sendfile("buy.html");
});

app.get('/buyRes', function(req, res) {
  let val = Number(req.query.val);
  if(val>=500000){
    res.send("item7");
  }
  else if(value>=100000){
    res.send(item6);
  }
    else if(value>=50000){
    res.send(item5);
  }else if(value>=30000){
    res.send(item4);
  }else if(value>=10000){
    res.send(item3);
  }else if(value>=5000){
    res.send(item2);
  }else if(value>=1000){
    res.send(item1);
  }
  else{
    res.send("구입불가");
  }
});

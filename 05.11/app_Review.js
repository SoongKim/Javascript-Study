var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/Re01', function(req, res) {
  res.sendfile("Mid_Test_Review_01.html");
});

app.get('/Re02', function(req, res) {
  res.sendfile("Mid_Test_Review_02.html");
});

app.get('/Re03', function(req, res) {
  res.sendfile("Mid_Test_Review_03.html");
});

app.get('/calcBMI', function(req, res) {
  let calc = 4;
  let height = req.query.First;
  let weight = req.query.Second;
  let BMI = (weight/(height*height)).toFixed(2);
  console.log(BMI);
  let bmiInfo;
  for(let i = 0; i < calc; i++){
    if(BMI < 20){
      bmiInfo = "20 미만";
    }
    else if(BMI < 25){
      bmiInfo = "정상";
    }
    else if(BMI < 30){
      bmiInfo = "과체중";
    }
    else{
      bmiInfo = "비만";
    }
  }
  res.send("BMI : " + BMI + " " + bmiInfo);
});

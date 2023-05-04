var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/mid01', function(req, res) {
  res.sendfile("Mid_Test_Soong01.html");
});


app.get('/mid02', function(req, res) {
  res.sendfile("Mid_Test_Soong02.html");
});

app.get('/mid03', function(req, res) {
  res.sendfile("Mid_Test_Soong03.html");
});

app.get('/calcBMI', function(req, res) {
  // 총 for문이 돌 횟수를 변수로 지정
  let calc = 4;
  // 키와 몸무게 값을 받아와 변수에 저장합니다.
  let height = req.query.First;
  let weight = req.query.Second;
  // BMI 공식. 소수점 2자리까지 출력되도록 반올람합니다.
  let BMI = (weight/(height*height)).toFixed(2);
  // 판별 데이터를 담을 변수를 선언
  let bmiInfo;
  //for문을 통해 해당하는 판별 데이터를 확보
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
  //이후 확보한 BMI 지수와 판별 데이터를 송신합니다.
  res.send("BMI : " + BMI + " " + bmiInfo);
});


app.get('/mid04', function(req, res) {
  res.sendfile("Mid_Test_Soong04.html");
});
app.get('/calcTest', function(req, res) {
  // 각 과목 별 가중치를 선언
  let weiKor = 2;
  let weiEng = 3;
  let weiMath = 5;
  // 각 과목의 값을 받아와 변수에 선언합니다.
  let kor = req.query.kor;
  let eng = req.query.eng;
  let math = req.query.math;
  //가중치가 반영된 점수를 연산하고, 해당 점수를 송신합니다.
  let weiScore = weiKor*kor+weiEng*eng+weiMath*math;

  res.send(""+weiScore);
});

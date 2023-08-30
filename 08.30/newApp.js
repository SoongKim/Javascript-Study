var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

const request = require('request');
const cheerio = require('cheerio');

app.get('/collectData', function(req, res){

  request('https://www.kopo.ac.kr/kangseo/content.do?menu=262', function(error, response, body){
    let $ = cheerio.load(body);
    console.log($.html());
  });
});

app.get('/getMenu', function(req, res){
  request('https://www.kopo.ac.kr/kangseo/content.do?menu=262', function(error, response, body){
    let $ = cheerio.load(body);
    const targetString = $('.tbl_table menu, radio, span').text();
    const targetStrings = targetString.split(';');

    const arr = [];
    for(let i = 1; i < targetStrings.length; i++){
        arr.push(targetStrings[i].trim());
    }
    arr.shift();

    const targetWord = arr.toString().split(',');
    const arr2 = [];
    for(let i = 0; i < targetWord.length; i++){
      arr2.push(targetWord[i]);
      arr2[i] = arr2[i].replace('\n', '');
    }
    console.log(arr2);

    const weekDay = [];
    let last = "";

    for (let i = 0; i < arr2.length; i++) {
      if (i > 0 && (i + 1) % 6 === 0) {
      weekDay.push(last);
      last = "";
      continue;
    }
    last = last.concat(arr2[i]); // 수정된 부분
    }

    res.send(weekDay);
  })
})

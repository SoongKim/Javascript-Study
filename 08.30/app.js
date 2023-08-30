var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
const cheerio = require('cheerio');
const axios = require('axios');

app.get('/collectData', function(req, res) {
  const url = new URL("https://www.kopo.ac.kr/kangseo/content.do?menu=262");
  axios.get(url.href).then(response => {
      const html = response.data;
      const $ = cheerio.load(html);
      const target = $('.meal_box, span').text();
      const targetWithoutSpaces = target.replace(/\s+/g, '');
      const parts = targetWithoutSpaces.split(';');

      const arr = [];
      for(let i = 1; i < parts.length; i++){
        arr.push(parts[i]);
      }

      const arr2 = arr.filter(item => !item.includes('document'));
      const targetString = arr2[0];

      //const targetShorts = targetString.split(',');

      console.log(arr2);

  })
});

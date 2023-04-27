var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);

app.get('/carPrice', function(req, res) {
  res.sendfile("carPrice.html");
});

app.get('/getCarPrice', function(req, res) {
  let priceInfo = [
    {itemName:"item1", price:1000},
    {itemName:"item2", price:5000},
    {itemName:"item3", price:10000},
    {itemName:"item4", price:30000},
    {itemName:"item5", price:50000},
    {itemName:"item6", price:100000},
    {itemName:"item7", price:500000}
  ]
  let inputPrice = req.query.price;
  let availableItemName = "구입불가";
  for(let i = 0; i < priceInfo.length; i++){
    if(priceInfo[i].price <= inputPrice){
      availableItemName = priceInfo.itemName;
    }
    else{
      break;
    }
  }
  res.send(availableItemName);
});

app.get('/select', function(req, res) {
  res.sendfile("select.html");
});

app.get('/getCarPrices', function(req, res) {
  let totalPrice = 0;
  let arrLen = 5;
  let priceInfo = [
    {itemName:"items1", price:2100},
    {itemName:"items2", price:1300},
    {itemName:"items3", price:1500},
    {itemName:"items4", price:3500},
    {itemName:"items5", price:3200},
  ]

  let colorInfo = [
    {itemName:"col01", price:100},
    {itemName:"col02", price:120},
    {itemName:"col03", price:200},
    {itemName:"col04", price:130},
    {itemName:"col05", price:80},
  ]

  let carPrice = req.query.sels;
  let carCol = req.query.cols;

  for(let i = 0; i < arrLen; i++){
    if(priceInfo[i].itemName == carPrice){
      totalPrice = totalPrice + priceInfo[i].price;
    }
    if(colorInfo[i].itemName == carCol){
      totalPrice = totalPrice + colorInfo[i].price;
    }
  }
  res.send(""+totalPrice);
});


app.get('/selects', function(req, res) {
  res.sendfile("pfVerSelect.html");
});

app.get('/getCarPric', function(req, res) {
  console.log(req.query);
  let brandPriceInfo = [2100, 1300, 1500, 3500, 3200];
  let brandColorInfo = [100, 120, 200, 130, 80];
  res.send(brandPriceInfo[req.query.sels]+brandColorInfo[req.query.cols]+"");
});

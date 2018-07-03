var express = require('express');
var app = express();

app.get('/', function (req, res){
  console.log('Got a GET request for the homepage');
  res.send('hello GET');
})

app.get('/', function(req, res){
  console.log('Got a POST request for the homepage');
  res.send('hello POST');
})

app.get('/del_user', function(req, res){
  console.log('Got a DELETE request for /del_user');
  res.send('Hello DELETE');
})

app.get('/list_user', function(req, res){
  console.log('Got a GEt request for /list_user');
  res.send('Page Listing');
})

app.get('/ab*cd', function(req, res){
  console.log('Got a GET request for /ab*cd');
  res.send('Page pattern Match');
})

var server = app.listen(8081, function(){
  var host = server.address().address;
  var port = server.address().address;

  console.log('Example app listening at ',host, port);
})

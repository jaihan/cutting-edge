var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/get.html', function(req, res){
  res.sendFile(__dirname +'/'+ 'get.html');
})

app.get('/process_get', function(req, res){
  response ={
    //var id = req.query.id; // $_GET["id"]
    first_name: req.query.first_name,
    last_nam: req.query.last_name
  };
  console.log(res);
  res.end(JSON.stringify(response));
})

var server= app.listen(8081, function(){
  var host = server.address().address
     var port = server.address().port
     console.log("Example app listening at http://%s:%s", host, port)

  })

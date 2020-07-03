var express = require('express');
var path = require('path');
var port=3000;
  
var app = express(); 

app.use(express.static(path.join(__dirname, './src')));

app.get('/', function(req, res) {
	res.send('Hello! The API is up and running');
});  

var server = app.listen(port, function() {
  console.log('Server listening on port ' + server.address().port);
});
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require("path");

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
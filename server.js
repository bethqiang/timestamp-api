var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello salah  World");
});

app.listen(4000);

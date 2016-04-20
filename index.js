var http = require('http');
var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });

var app = express();

app.post('/', upload.single('11'), function (req, res) {
  console.log(req);
});

app.listen(8080, function () {
  console.log('Ready Freddy');
});
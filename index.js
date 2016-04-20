var http = require('http');
var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });
var bodyParser = require('body-parser');

var app = express();
// Decode JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/', upload.single('11'), function (req, res) {
  console.log(req);
});

app.listen(8080, function () {
  console.log('Ready Freddy');
});
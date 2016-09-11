var express = require('express');
var app = express();
app.use(favicon(path.join(__dirname, 'public','images','favicon.ico')));
app.get('/', function(req, res){
    res.send('hello world');
});
module.exports= app;

var favicon = require('serve-favicon');
var path = require('path');


var gzippo = require('gzippo');
var express = require('express');
//var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(__dirname + '/dist'));

//app.use(morgan('app'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
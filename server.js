var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./routes/api');
var web = require('./routes/web');
const path = require('path');
var http = require('http');

require('dotenv').config();

// load routes 
api.apiRoutes(app);
web.routes(app, path.resolve(__dirname));


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With');
   
   
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
   
});

app.use(bodyParser.json());
app.use(express.static('website'));

var server = http.createServer(app).listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Vector server listening at http://%s:%s", host, port)
 });

 module.exports = server;
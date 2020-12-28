var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Router = require('./routes.config');
//var https = require('https');
var http = require('http');
var fs = require('fs');
//const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

// var httpsOptions = {
//     key: fs.readFileSync(process.env.KEY),
//     cert: fs.readFileSync(process.env.CERT)
// };

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
Router.routesConfig(app);


// var server2 = https.createServer(httpsOptions, app).listen(4433, function () {
//     var host = server2.address().address
//     var port = server2.address().port
//     console.log("Vector app listening at https://%s:%s", host, port)
//  });

// app.use('/api', createProxyMiddleware({ target: 'https://localhost:4433', changeOrigin: true }));

 var server = http.createServer(app).listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Vector app listening at http://%s:%s", host, port)
 });

 
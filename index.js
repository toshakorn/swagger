'use strict';

require('dotenv').config();
var path = require('path');
var http = require('http');
var express = require('express');
const mongoose = require('mongoose');
var oas3Tools = require('oas3-tools');
var serverPort = 8081;
const cors = require("cors");
const mongoString = "mongodb://127.0.0.1:27017/pj";

// contect to mongo
mongoose.connect(mongoString);
const database = mongoose.connection

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    }
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var openApiApp = expressAppConfig.getApp();

const app = express();

app.use(/.*/, cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    if ('OPTIONS' === req.method) {
        res.status(204).send();
    }
    else {
        next();
    }
});

  
for (let i = 2; i < openApiApp._router.stack.length; i++) {
    app._router.stack.push(openApiApp._router.stack[i])
}

// checking conect
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});


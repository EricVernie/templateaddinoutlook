'use strict';
var cors=require('cors');
var fs = require('fs'),
    express = require('express'),
    https = require('https');

var https_options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost-cert.pem')
};

var PORT = 8443,
    HOST = 'localhost';

var app = express();

// set static routes
app.use(cors({origin: 'https://localhost:44353/api/values'}))
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'https://localhost:44353/api/values');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
app.use('/',
    express.static(__dirname + '/src')
);

var server = https.createServer(https_options, app)                

server.listen(PORT, HOST);


console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+');
console.log('HTTPS Server listening @ https://%s:%s', HOST, PORT);
console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+');

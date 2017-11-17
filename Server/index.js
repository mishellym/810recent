var express = require('express'), //1
config = require('./config/config');    
var logger = require ('./config/logger');

//create app instance of express.js
var app = express();    //1

//pull in  config files
require('./config/express')(app, config);
logger.log("Creating HTTP server on port: " + config.port);

require('http').createServer(app).listen(config.port, function () {

logger.log("HTTP Server listening on port: " + config.port + ", in " + app.get('env') + " mode");

});
module.exports = app
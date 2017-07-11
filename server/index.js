// Import express, http, and body-parser:
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

// Create an express app variable that will allow us to access all the good things express has to offer, and that will create an INSTANCE of express:
var app = express();

// Add an instance of bodyParser that will be used to parse incoming JSON requests:
app.use(bodyParser.json({ type: '*/*' }));

// Define a port on your local machine:
var port = process.env.PORT || 3000;

// Create a node server. Pass your express() app into the createServer() express application by passing in the app variable from above:
var server = http.createServer(app);
// The http library is a native node library and is used for low level http requests.

// Get your server to listen to any requests from the outside world:
server.listen(port);

console.log('Server listening on ' + port);

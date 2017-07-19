require('dotenv').config();
var cors = require('cors');
var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

// Create an express app variable that will allow us to access all the good things express has to offer, and that will create an INSTANCE of express:
var app = express();

// Import the router file:
var router = require('./router');

// Import mongoose:
var mongoose = require('mongoose');

// Database connection:
mongoose.connect('mongodb://localhost:bucket/bucket');


/* Begin Middleware: */

// Add cors (a middleware on the Express side) and use the parens to invoke it. This allows users to make requests from other ports & domains.
app.use(cors());

// Add an instance of bodyParser that will be used to parse incoming JSON requests:
app.use(bodyParser.json({ type: '*/*' }));

// Call the router function and pass in the app:
router(app);

/* End Middleware */


// Define a port on your local machine:
var port = process.env.PORT || 3000;

// Create a node server. Pass your express() app into the createServer() express application by passing in the app variable from above:
var server = http.createServer(app);
// The http library is a native node library and is used for low level http requests.

// Get your server to listen to any requests from the outside world:
server.listen(port);

console.log('Server listening on ' + port);

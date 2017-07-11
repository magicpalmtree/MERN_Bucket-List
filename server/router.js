// Import auth.js file:
var Auth = require('./controllers/auth');
// Import the User model:
var User = require('./models/user');

// When a user wants to sign up, route her to '/signup' and run the signup function:
module.exports = function(app){
	app.post('/signup', Auth.signup);
}

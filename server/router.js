// Import stuff:
var Auth = require('./controllers/auth');
var passportService = require('./services/passport');
var passport = require('passport');

// Add the Passport interceptor/middleware that'll live btwn the incoming request & router:
var requireAuth = passport.authenticate('jwt', {session: false});
// By default, the .authenticate above wants to make a cookie. Since we're using jwt, we don't WANT a cookie. That's why we set the 1st parameter to 'jwt' and the 2nd to {session: false}.

module.exports = function(app){

	// Add a new route for our app.get method:
	app.get('/', requireAuth, function(req, res){
		res.send('Hello Homepage');
		// res.send({hi: 'there'});
	});
	
	// When a user wants to sign up, route her to '/signup' and run the signup function:
	app.post('/signup', Auth.signup);
}

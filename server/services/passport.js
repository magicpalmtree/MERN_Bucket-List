// Import files:
var passport = require('passport');
var User = require('../models/user');
var config = require('../config');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

// Set up options for the JwtStrategy:
var jwtOptions = {
	// In a request, extract the token from a Header called "authorization":
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	// We need to get a secret key from a config file:
	secretOrKey: config.secret
};

// Create the JwtStrategy.
// The "payload" parameter on the next line is the decoded jwt token.
var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){ 
	// On "payload" on next line, we have a "sub" property - use the User model, look through all users, and find user with given id:
	User.findById(payload.sub, function(err, user){
		// In this findById callback, there are two arguments: "err" and "user". "err" will be populated only if the search fails:
		if (err) { return done(err, false); }
		// If we CAN find the user, pass it to the "done" callback. The user's authenticated:
		if (user) {
			done(null, user);
		} else {
			// If we CAN'T find user with given id, we call "done" func w/o user object:
			done(null, false);
		}
	});
});


// Tell passport to use the jwtLogin function from above:
passport.use(jwtLogin);

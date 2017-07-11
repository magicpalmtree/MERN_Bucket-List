// This file is the controller that handles the authentication when a user is signing UP or signing OUT.

// Import the User model into our controller:
var User = require('../models/user');

// Define a signup function:
exports.signup = function(req, res, next){
	// Grab an incoming request using email & password variables:
	var email = req.body.email;
	var password = req.body.password;
	
	if ( !email || !password ) {
		return res.status(418).send({ error: "You must provide an email and a password."});
	}

	// Find one instance of a specific email address. 1st argument is the email object; 2nd argument is a callback function that runs asynchronously (the function will be invoked when response is received from the server):
	User.findOne({ email: email }, function(err, existingUser){
	// existingUser above: If there's someone with the email, the value will be null.

		// Handle a search error:
		if(err){
			return next(err);
		} 

		// Handle existing users:
		if(existingUser){
			// return res.status(418).send(err);
			return res.status(418).send("Email is in use.");
		}

		// If the user doesn't exist, save the user:
		var user = new User({
			email: email,
			password: password
		});

		// Save the user's record to the database:
		user.save(function(err){
			if(err) { return next(err); }
			// Respond to request indicating the user was created:
			res.json({ success: true });
		});
	});
}


// Module 9 Correction from Ben Cook:
// function createUserToken(user){
//     let timestamp = new Date().getTime();
//     return jwt.encode({sub: user.id,iat: timestamp }, config.secret);
// }

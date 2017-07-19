// Import stuff:
var Auth = require('./controllers/auth');
var BucketList = require('./controllers/bucketlistcontroller');

var passportService = require('./services/passport');
var passport = require('passport');

// Add the Passport interceptor/middleware that'll live btwn the incoming request & router:
var requireAuth = passport.authenticate('jwt', {session: false});
// By default, the .authenticate above wants to make a cookie. Since we're using jwt, we don't WANT a cookie. That's why we set the 1st parameter to 'jwt' and the 2nd to {session: false}.

// Create another helper:
var requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){	
	// When a user wants to sign up, route her to '/signup' and run the signup function:
	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
	app.post('/newitem', requireAuth, BucketList.addBucketList);
	/* Create our "/items" route. It's a "get" request. It requires authentication. Call the fetchBucketLists function on the BucketList variable that's at the top of this file. */
	app.get('/items', requireAuth, BucketList.fetchBucketLists);
	app.get('/items/:id', requireAuth, BucketList.fetchBucketList);
	// Create an endpoint for update:
	app.put('/items/:id', requireAuth, BucketList.updateBucketList);
	app.delete('/items/:id', requireAuth, BucketList.deleteBucketList);
}






































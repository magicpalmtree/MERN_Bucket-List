// Import stuff:
var Auth = require('./controllers/auth');
var User = require('./models/user');
var BucketList = require('./controllers/bucketlistcontroller');

var passportService = require('./services/passport');
var passport = require('passport');

// Add the Passport interceptor/middleware that'll live btwn the incoming request & router:
var requireAuth = passport.authenticate('jwt', {session: false});
// By default, the .authenticate above wants to make a cookie. Since we're using jwt, we don't WANT a cookie. That's why we set the 1st parameter to 'jwt' and the 2nd to {session: false}.

// Create another helper:
var requireSignin = passport.authenticate('local', {session:false});

module.exports = function(app){	

	app.post('api/signin', requireSignin, Auth.signin);
	// When a user wants to sign up, route her to '/signup' and run the signup function:
	app.post('/api/signup', Auth.signup);
	app.post('/api/newitem', requireAuth, BucketList.addBucketList);
	app.get('/api/items', requireAuth, BucketList.fetchBucketLists);
	app.get('/api/items/:id', requireAuth, BucketList.fetchBucketList);
	// Do I need this line? -
	app.put('/api/items/:id', requireAuth, BucketList.updateBucketList);
	app.delete('/api/items/:id', requireAuth, BucketList.deleteBucketList);
};






































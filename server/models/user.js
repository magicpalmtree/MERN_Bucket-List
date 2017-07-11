// Import mongoose:
var mongoose = require('mongoose');

// Create a Schema variable. A Schema will tell mongoose about particular fields our models will have:
var Schema = mongoose.Schema;

// Create a new Schema object called userSchema that will help us tell Mongoose that we're passing an email and a password for our new users:
var userSchema = new Schema({
	email: {
		type: String,
		// Make sure that after a user creates an account, she can't create a new account:
		unique: true,
		// Since Mongo doesn't know the difference btwn an uppercase string & a lowercase string, make everything lowercase:
		lowercase: true
	},
	password: String
});

// Create the model that will create new users and load the Schema into Mongoose. This tells Mongoose that there's a new Schema called 'userSchema' that corresponds to a collection called 'user' (1st parameter):
var model = mongoose.model('user', userSchema);

// Export this module:
module.exports = model;

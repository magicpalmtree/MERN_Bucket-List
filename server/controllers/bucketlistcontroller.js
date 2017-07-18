var BucketList = require('../models/bucketlist.js');

// This is the add function:
exports.addBucketList = function(req, res, next){
	// For Postman use:
	var title = req.body.title;
	// var title = req.body.props.title;
	var topic = req.body.topic;
	//var topic = req.body.props.topic;
	var url = req.body.url;
	//var url = req.body.props.url;
	var content = req.body.content;
	//var content = req.body.props.content;
	var specificUser = req.user._id; // Mongo queries are much easier with an underscore before _id.
	//var specificUser = req.user;

	var bucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if(err) { return next(err); }
		res.json(bucketList);
	});
}

// This is the fetch function:
exports.fetchBucketLists = function(req, res) {
	// Create specificUser variable to store the id of the incoming request:
	var specificUser = req.user._id;

	// The .find function below is a Mongoose function. We are searching for any items that correspond to a specific USER.

	// Put the specificUser variable as the VALUE in the "find" parameter, along w/the specificUser KEY that matches up to the Mongoose model:
	BucketList.find({specificUser: specificUser})
	.then(
		// The fetchSuccess method below returns a response for the specific USER.
		function fetchSuccess(data) {
			// In the response is the user's DATA that gets sent back in the form of JSON:
			res.json(data);
		},
		// Error handling:
		function fetchError(err) {
			res.send(500, err.message);
		}
	);
}

// Fetch a single item out of MongoDB:
exports.fetchBucketList = function(req, res) {
	var specificBucketList = req.params.id;
	BucketList.findOne({_id: specificBucketList})
	.then(
		function fetchSuccess(data) {
			res.json(data);
		},
		function fetchError(err) {
			res.send(500, err.message);
		}
	);
}

// Delete a single item out of MongoDB:
exports.deleteBucketList = function(req, res) {
	var specificBucketList = req.params.id;
	BucketList.remove({_id: specificBucketList})
	.then(
		function deleteSuccess(data) {
			res.json(data);
		},
		function deleteError(err) {
			res.send(500, err.message);
		}
	);
}












































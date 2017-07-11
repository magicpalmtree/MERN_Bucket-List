module.exports = function(app){
	// Call the express .get method on the app. 1st argument (/) is the route that's requested, which would be localhost:3000/. If the 1st parameter's fulfilled, the 2nd argument will pop, and a function will run. The function gets called w/3 arguments:
	app.get('/', function(req, res, next){
		res.send("HELLO HOMEPAGE");
	});

	app.get('/signup', function(req, res, next){
		res.send("Hey folks, thanks for signing up!");
	});
}
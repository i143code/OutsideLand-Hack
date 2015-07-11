var UserController = require('../server/controllers/userController');
var ArtistController = require('../server/controllers/artistController');
var ConcertController = require('../server/controllers/concertController');

module.exports = function(app) {
	
	// Concert-specfic routes
	app.get('/concerts/:concertname/artists/show', function(req, res){
		ConcertController.retrieveArtists(req, res);
	});

	app.get('/concerts/:concertname/performances/show', function(req, res){
		ConcertController.retrievePerformances(req, res);
	});

	// User-specific routes
	app.get('/users/:userid/show', function(req, res){
		UserController.retrieveSingleUser(req, res);
	});

	app.post('/users/new', function(req, res){
		UserController.createUser(req, res);
	});

}
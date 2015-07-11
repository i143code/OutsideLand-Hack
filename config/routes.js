var UserController = require('../server/controllers/userController');
var ArtistController = require('../server/controllers/artistController');
var ConcertController = require('../server/controllers/concertController');

module.exports = function(app) {
	
	// Concert-specfic routes
	app.get('/concerts/:concertname/artists/show', function(req, res){
		ConcertController.retrieveArtists(req, res);
	});

	app.get('/concerts/:concertname/performances/show'), function(req, res){
		ConcertController.retrievePerformances(req, res);
	});

	// User-specific routes
	app.get('/users/:userid/show', function(req, res){
		UserController.retrieveSingleUser(req, res);
	});

	app.post('/users/new', function(req, res){
		UserController.createUser(req, res);
	});

	app.post('/users/:userid/artists/new', function(req, res){
		UserController.addArtist(req, res);
	});

	app.post('/users/:userid/songsheard/new', function(req, res){
		UserController.addSong(req, res);
	});

	app.post('/users/:userid/songsliked/new', function(req, res){
		UserController.likeSong(req, res);		
	});

	// Artist-specific routes
	app.get('/artists/:artistid/show', function(req, res){
		ArtistController.retrieveArtist(req, res);
	});

	app.post('/artsts/new', function(req, res){
		ArtistController.createArtist(req, res);
	});

	app.post('/artists/:artistid/likes/new', function(req, res){
		ArtistController.likeArtist(req, res);
	});

	app.post('/artists/:artistid/attending/new', function(req, res){
		ArtistController.addAttending(req, res);
	});

	app.post('/artists/:artistid/heard/new', function(req, res){
		ArtistController.addHeard(req, res);
	});


}
var UserController = require('../server/controllers/userController');
var ArtistController = require('../server/controllers/artistController');
var ConcertController = require('../server/controllers/concertController');

module.exports = function(app) {
	
	// Get list of concert artists
	app.get('/concerts/:concertname/artists/show', function(req, res){
		ConcertController.retrieveArtists(req, res);
	})

}
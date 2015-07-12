var UserController = require('../server/controllers/userController');
var ArtistController = require('../server/controllers/artistController');
var ConcertController = require('../server/controllers/concertController');

var passport = require('passport'), FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new FacebookStrategy({
	clientID: '1673236122905259',
	clientSecret: '0540bcd3ad076073b99f9fee1c679703',
	callbackURL: 'http://localhost:8000/auth/facebook/callback'
	},
	function(accessToken, refreshToken, profile, done){

		UserController.createOrLoginFacebookUser(profile.displayName, profile.id);

		process.nextTick(function() {
			return done(null, profile);
		});
	}

))

console.log(passport.session);

module.exports = function(app) {
	
	// Login

	app.get('/auth/facebook', passport.authenticate('facebook'));

	app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/success', failureRedirect: '/#/failure'}))

	app.get('/success', function(req,res){
		res.redirect('/#/user/'+req.session.passport.user.id);
	})

	// Concert-specfic routes
	app.get('/concerts/:concertname/artists/show', function(req, res){
		ConcertController.retrieveArtists(req, res);
	});

	app.get('/concerts/:concertname/performances/show', function(req, res){
		ConcertController.retrievePerformances(req, res);
	});

	app.post('/concerts/:concertname/:artistname/like', function(req, res){
		ConcertController.likeArtist(req, res);
	})

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

	app.post('/users/:userid/artistliked/new', function(req, res){
		UserController.likeArtist(req, res);
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

	app.get('/artists/trending', function(req, res){
		ArtistController.retrieveTrending(req, res);
	})


}
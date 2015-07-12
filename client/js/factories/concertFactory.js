discoverlands.factory('concertFactory', function($http){
	
	var factory = {};

// /concerts/:concertname/artists/show
	factory.retrieveArtists = function(callback){
		$http.get('/concerts/outsidelands/artists/show')
			.success(function(returnedArtists){
				callback(returnedArtists);
			})
	}

	return factory;

})
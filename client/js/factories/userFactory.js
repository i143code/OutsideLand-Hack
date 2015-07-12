discoverlands.factory('userFactory', function($http){
	
	var user;

	var factory = {};

	factory.createUser = function(newUser, callback){
		$http.post('/users/new', newUser)
			.success(function(addedUser){
				callback(addedUser);
			})
	}

	factory.retrieveSingleUser = function(userToRetrieve, callback){
		$http.get('/users/'+userToRetrieve+'/show')
			.success(function(retrievedUser){
				callback(retrievedUser);
			})

	}

	factory.addArtist = function(userToRetrieve, artistToAdd, callback){
		$http.post('/users/'+userToRetrieve+'/artists/new')
			.success(function(updatedUser){
				callback(updatedUser);
			})
	}

	factory.addSong = function(userToRetrieve, songHeard, callback){
		$http.post('/users/'+userToRetrieve+'/songsheard/new', songHeard)
			.success(function(updatedUser){
				callback(updatedUser);
			})
	}

	factory.likeSong = function(userToRetrieve, likedSong, callback){
		$http.post('/users/'+userToRetrieve+'/songsliked/new')
			.success(function(updatedUser){
				callback(updatedUser);
			})
	}

	factory.likeArtist = function(userToRetrieve, artistLiked, callback){
		$http.post('/users/'+userToRetrieve+'/artistliked/new')
			.success(function(updatedUser){
				callback(updatedUser);
			})
	}

	factory.setUser = function(userToSet){
		var user = userToSet;
		console.log(user);
	}

	factory.getUser = function(callback){
		callback(user);
	}

	return factory;

})
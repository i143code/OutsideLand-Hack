discoverlands.controller('userCtrl', function($routeParams, $scope, userFactory, concertFactory, artistFactory){

	$scope.user;
	$scope.artists;

	$scope.createUser = function(){
		console.log('Creating user...');
		userFactory.createUser($scope.newUser, function(userCreated){
			$scope.user = userCreated;
			console.log('user created!');
		})
	}

	$scope.retrieveSingleUser = function(){
		userFactory.retrieveSingleUser($routeParams.userid, function(retrievedUser){
			$scope.user = retrievedUser;
		})
	}

	$scope.addArtist = function(){
		userFactory.addArtist($routeParams.userid, $scope.artist, function(updatedUser){
			$scope.user = updatedUser;
		})
	}

	$scope.addSong = function(){
		userFactory.addSong($routeParams.userid, $scope.song, function(updatedUser){
			$scope.user = updatedUser;
		})
	}

	$scope.likeSong = function(){
		userFactory.likeSong($routeParams.userid, $scope.song, function(updatedUser){
			$scope.user = updatedUser;
		})
	}

	$scope.likeArtist = function(){
		userFactory.likeArtist($routeParams.userid, $scope.artistLiked, function(updatedUser){
			$scope.user = updatedUser;
		})
	}

	$scope.concertArtistLike = function(concertName, artistName){
		concertFactory.likeArtist(concertName, artistName, function(updatedArtists){
			$scope.artists = updatedArtists;
		})
	}

	userFactory.setUser($routeParams.id);

	$scope.user = $routeParams.id;

	userFactory.getUser(function(retrievedUser){
		$scope.user = retrievedUser;
	})

	concertFactory.retrieveArtists(function(retrievedArtists){
		$scope.artists = retrievedArtists;
		console.log($scope.artists);
	})

})
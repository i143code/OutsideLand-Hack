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

	$scope.likeArtist = function(artistLiked){
		console.log('in liked artist')
		userFactory.likeArtist($scope.user.facebook_id, artistLiked, function(updatedConcerts){
			$scope.artists = updatedConcerts;
		})
	}

	$scope.concertArtistLike = function(concertName, artistName){
		concertFactory.likeArtist(concertName, artistName, function(updatedArtists){
			$scope.artists = updatedArtists;
		})
	}

	userFactory.setUser($routeParams.id);

	$scope.user = $routeParams.id;
	concertFactory.retrieveArtists(function(retrievedArtists){
		$scope.artists = retrievedArtists;
		console.log($scope.artists);
		userFactory.getUser($scope.user, function(retrievedUser){
			$scope.user = retrievedUser;
			for (var i = 0; i < $scope.artists.performances.length; i++) {
				for (var j = 0; j < $scope.user.artists_liked.length; j++) {
					if ($scope.artists.performances[i].artist === $scope.user.artists_liked[j]){
						$scope.user.artists_liked[j] = $scope.artists.performances[i];
					}
				}
			}
			$scope.user.performances = $scope.user.artists_liked
		})
	})

	$scope.day_filter = '08/07/2015';

	$scope.changeDay = function(day){
		switch(day) {
			case 1:
			$scope.day_filter = '08/07/2015';
			break;
			case 2:
			$scope.day_filter = '08/08/2015';
			break;
			case 3:
			$scope.day_filter = '08/09/2015'
		}
	}

	$scope.allShown = true;
	$scope.allOrMine = function(allOrMine) {
		if (allOrMine === 'mine') {
			userFactory.getUser($routeParams.id, function(retrievedUser){
				$scope.user = retrievedUser;
				for (var i = 0; i < $scope.artists.performances.length; i++) {
					for (var j = 0; j < $scope.user.artists_liked.length; j++) {
						if ($scope.artists.performances[i].artist === $scope.user.artists_liked[j]){
							$scope.user.artists_liked[j] = $scope.artists.performances[i];
						}
					}
				}
				$scope.user.performances = $scope.user.artists_liked
				$scope.temp = $scope.artists;
				$scope.artists = $scope.user;
				$scope.allShown = false;
			})		
			
		} else if (allOrMine === 'all') {
			$scope.user = $scope.artists;
			$scope.artists = $scope.temp;
			$scope.allShown = true;
		}
	}

	$scope.showWeather = false;

	userFactory.getWeather(function(weatherData){
		$scope.weatherData = weatherData;
		console.log($scope.weatherData);
	})

	$scope.dismissWeather = function(){
		$scope.showWeather = true;
	}

	$scope.displayWeather = function(){
		$scope.showWeather = false;
	}

})
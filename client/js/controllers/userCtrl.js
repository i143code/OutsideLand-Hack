discoverlands.controller('userCtrl', function($routeParams, $scope, userFactory){

	$scope.user;

	$scope.createUser = function(){
		userFactory.createUser($scope.newUser, function(userCreated){
			$scope.user = userCreated;
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

	userFactory.getUser(function(retrievedUser){
		$scope.user = retrievedUser;
	})

})
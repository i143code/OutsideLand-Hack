discoverlands.controller('concertCtrl', function($routeParams, $scope, concertFactory){
	
	$scope.artists;

	concertFactory.retrieveArtists(function(returnedArtists){
		$scope.artists = returnedArtists;
		console.log($scope.artists);
	})

})
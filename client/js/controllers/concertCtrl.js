discoverlands.controller('concertCtrl', function($routeParams, $scope, concertFactory, $window){
	
	$scope.artists;

	concertFactory.retrieveArtists(function(returnedArtists){
		$scope.artists = returnedArtists;
	})

})
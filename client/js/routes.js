discoverlands.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/artists.html'
		})
		.when('/artists', {
			templateUrl: 'partials/artists.html'
		})
		.when('/mylist', {
			templateUrl: 'partials/mylist.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})
discoverlands.factory('concertFactory', function($http){
	
	var factory = {};

// /concerts/:concertname/artists/show
	factory.retrieveArtists = function(callback){
		$http.get('/concerts/outsidelands/artists/show')
			.success(function (returnedArtists){
				artists = returnedArtists;
				callback(returnedArtists);
			})
	}

	return factory;
})

		function callMakeRequestWithArtists(){ // repeatedly calls youtubeAPI for artists videos 
			for ( var i = 0; i < artists.performances.length; i++){
				makeRequest(i);
			}
		}

        function makeRequest(i) {

          var request = gapi.client.youtube.search.list({
            q: artists.performances[i].artist,
            part: 'snippet',
            maxResults: 3,
            type: 'video',
            videoEmbeddable: true,
          });

          request.execute(function (response) {
            var youtubeSearchVideos = response.result.items;
            
            $('#youtubeSearchResults').append("<div>");

            $.each(youtubeSearchVideos, function (index, item) {
            
              vidTitle = item.snippet.title;
              vidThumburl =  item.snippet.thumbnails.default.url;
              vidThumbId = item.id.videoId ? item.id.videoId : item.id.channelId;

              vidThumbimg = '<div videoId="' + vidThumbId + 
                '" class="youtubeThumbnail"><a href="https://www.youtube.com/watch?v=' + 
                vidThumbId + '"><img id="thumb" src="'+ vidThumburl +
                '" alt="No  Image Available." class="youtubeThumbnailImage"></a>';

              $('#youtubeSearchResults').append( vidTitle + vidThumbimg +  '</div>');
            });

            $('#youtubeSearchResults').append("</div>");
          });
        }

        function init() {

          	gapi.client.setApiKey('AIzaSyD1za0BH_Y0fcA3y1oQqTLqg3goxoZMxgA');
          	gapi.client.load('youtube', 'v3', function() {
                callMakeRequestWithArtists(); // fix to address angular late load for artists
          });
        }
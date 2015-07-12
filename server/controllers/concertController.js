var mongoose = require('mongoose');

var Concert = mongoose.model('concert');

module.exports = {
	retrieveArtists: function(req, res){
		Concert.findOne({name: req.params.concertname})
			.populate('artists')
			.execute(function(err, artists){
				if (err) {
					console.log('Error retrieving artist list', err);
				} else {
					res.json(artists.performances);
				}
			})
	},
	retrievePerformances: function(req, res){
		Concert.findOne({name: req.params.concertname})
			.populate('artists')
			.execute(function(err, performances){
				if (err) {
					console.log('Error retrieving performance list', err);
				} else {
					res.json(performances);
				}
			})
	}
}
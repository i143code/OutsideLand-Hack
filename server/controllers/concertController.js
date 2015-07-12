var mongoose = require('mongoose');

var Concert = mongoose.model('Concert');

module.exports = {
	retrieveArtists: function(req, res){
		Concert.findOne({name: req.params.concertname}, function(err, concert){
			if (err) {
				console.log('Error retrieving artists');
			} else {
				res.json(concert);
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
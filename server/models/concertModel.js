var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ConcertSchema = new mongoose.Schema({
	name: String,
	date: Date,
	performances: [{
		time: Date,
		artist: String,
		stage: String
	}],
	stages: [{ name: String, location: String}]
});

var Concert = mongoose.model('Concert', ConcertSchema);
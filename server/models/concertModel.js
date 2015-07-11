var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ConcertSchema = new mongoose.Schema({
	name: String,
	date: Date,
	performances: [{
		time: Date,
		artist: { type: Schema.Types.ObjectId, ref: 'Artist' },
		stage: String
	}],
	stages: [{ name: String, location: String}]
});

var Concert = mongoose.model('Concert', ConcertSchema);
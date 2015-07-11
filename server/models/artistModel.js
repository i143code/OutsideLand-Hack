var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtistSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	genre, String,
	users_attending: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	songs_heard: [{ song: String, time_heard: { type: Date, default: Date.now }}]
});

var Artist = mongoose.model('Artist', ArtistSchema);
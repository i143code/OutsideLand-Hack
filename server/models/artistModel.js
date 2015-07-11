var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtistSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	genre: String,
	likes: Number,
	users_attending: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	songs_heard: [{ song: String, time_heard: { type: Date, default: Date.now }, _user: { type: Schema.ObjectId, ref: 'User'} }]
});

var Artist = mongoose.model('Artist', ArtistSchema);
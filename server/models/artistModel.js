var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArtistSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	genre: String,
	likes: { type: Number, default: 0 },
	users_attending: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	songs_heard: [{ song: String, times_heard: { type: Date, default: Date.now }, _user: { type: Schema.ObjectId, ref: 'User'}, likes: { type: Number, default: 0 } }]
});

var Artist = mongoose.model('Artist', ArtistSchema);
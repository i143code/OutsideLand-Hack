var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	outside_land_username: String,
	artist_list: {
		artist_name: String,
		songs_heard: type: String,
		times_heard: [{ type: Date, default: Date.now }]
	}
})

var User = mongoose.model('User', UserSchema);
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/outside_hacks');

require('../server/models/users');
require('../server/models/artists');
require('../server/models/concerts');
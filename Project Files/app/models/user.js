// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our user model
// module.exports allows us to pss this to other files when it is called
module.exports = mongoose.model('User', {
    username : {type : String, default : ''},
    password : {type : String}
});
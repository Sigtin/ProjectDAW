// server.js

var express = require('express');
var app = express();
var path = require('path');

// configuration ===========================================


// set our port
var port = 8080;

app.use(express.static(__dirname + '/public'));

// set our route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user                     
console.log('Magic happens on port ' + port);

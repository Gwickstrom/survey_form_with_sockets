//load the express module
//load the path module
//load the body-parser
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// invoke var express and store the resulting application in var app
var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
var route = require('./routes/index.js')(app, server);
//setting server to run on port 8000

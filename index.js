'use strict';

// Libraries
var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require("mongoose");
var ejs = require("ejs");

var routes = require("./routes")(app);
var configDB = require("./database")

// setting up
app.set('view engine', 'ejs');
mongoose.connect(configDB.url);

var db = mongoose.connection;

db.on('error', function() {
	console.log("se fode aew");
});

db.once('open', function() {
	console.log("working!!");
});

app.listen(port);